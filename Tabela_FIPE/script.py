import streamlit as st
import requests
import pandas as pd
import matplotlib.pyplot as plt

st.set_page_config(page_title="Comparador FIPE por Ano", layout="wide")

def consultar_fipe(codigo_fipe):
    url = f"https://brasilapi.com.br/api/fipe/preco/v1/{codigo_fipe}"
    resposta = requests.get(url)
    if resposta.status_code == 200:
        return resposta.json()
    else:
        return []

def montar_dataframe_fipe(dados_fipe):
    df = pd.DataFrame(dados_fipe)

    # Corrige o valor: remove "R$", pontos e troca vírgula por ponto
    df['valor'] = df['valor'].replace({'R\$': '', '\.': '', ',': '.'}, regex=True).astype(float)

    # Trabalha com anoModelo
    df = df.sort_values('anoModelo')
    return df[['anoModelo', 'valor']]

# --------------------------- APP STREAMLIT ---------------------------

st.title("📊 Comparador de Modelos FIPE por Ano")

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

        # Merge para alinhar os anos de modelo
        df_merged = pd.merge(df1, df2, on='anoModelo', suffixes=('_modelo1', '_modelo2'))

        st.subheader("📈 Gráfico Comparativo de Valores FIPE por Ano")

        fig, ax = plt.subplots(figsize=(10, 5))
        ax.plot(df_merged['anoModelo'], df_merged['valor_modelo1'], label=f"Modelo 1 ({fipe1})", marker='o')
        ax.plot(df_merged['anoModelo'], df_merged['valor_modelo2'], label=f"Modelo 2 ({fipe2})", marker='s')
        ax.set_xlabel("Ano do Modelo")
        ax.set_ylabel("Valor (R$)")
        ax.legend()
        ax.grid(True)
        plt.xticks(rotation=45)

        st.pyplot(fig)

        st.subheader("📋 Tabela de Comparação")
        st.dataframe(df_merged.rename(columns={
            'anoModelo': 'Ano do Modelo',
            'valor_modelo1': f'Valor Modelo 1 ({fipe1})',
            'valor_modelo2': f'Valor Modelo 2 ({fipe2})'
        }))