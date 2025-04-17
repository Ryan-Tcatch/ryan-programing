import streamlit as st
import requests
import pandas as pd
import matplotlib.pyplot as plt

st.set_page_config(page_title="Comparador FIPE", layout="wide")

def consultar_fipe(codigo_fipe):
    url = f"https://brasilapi.com.br/api/fipe/preco/v1/{codigo_fipe}"
    resposta = requests.get(url)
    if resposta.status_code == 200:
        return resposta.json()
    else:
        return []

def montar_dataframe_fipe(dados_fipe):
    df = pd.DataFrame(dados_fipe)
    df['mes'] = pd.to_datetime(df['mes'], format="%m/%Y")
    df = df.sort_values('mes')
    df['valor'] = df['valor'].astype(float)
    return df[['mes', 'valor']]

st.title("📊 Comparador de Modelos FIPE")

col1, col2 = st.columns(2)

with col1:
    fipe1 = st.text_input("Digite o código FIPE do Modelo 1", value="001267-0")

with col2:
    fipe2 = st.text_input("Digite o código FIPE do Modelo 2", value="001315-0")

if st.button("Comparar Modelos"):
    dados1 = consultar_fipe(fipe1)
    dados2 = consultar_fipe(fipe2)

    if not dados1 or not dados2:
        st.error("Erro ao buscar dados da FIPE. Verifique os códigos.")
    else:
        df1 = montar_dataframe_fipe(dados1)
        df2 = montar_dataframe_fipe(dados2)

        # Merge para alinhar os meses
        df_merged = pd.merge(df1, df2, on='mes', suffixes=('_modelo1', '_modelo2'))

        st.subheader("📈 Gráfico Comparativo de Valores FIPE")

        fig, ax = plt.subplots(figsize=(10, 5))
        ax.plot(df_merged['mes'], df_merged['valor_modelo1'], label=f"Modelo 1 ({fipe1})", marker='o')
        ax.plot(df_merged['mes'], df_merged['valor_modelo2'], label=f"Modelo 2 ({fipe2})", marker='s')
        ax.set_xlabel("Mês")
        ax.set_ylabel("Valor (R$)")
        ax.legend()
        ax.grid(True)
        plt.xticks(rotation=45)

        st.pyplot(fig)

        st.subheader("📋 Tabela de Comparação")
        st.dataframe(df_merged.rename(columns={
            'mes': 'Mês',
            'valor_modelo1': f'Valor Modelo 1 ({fipe1})',
            'valor_modelo2': f'Valor Modelo 2 ({fipe2})'
        }))