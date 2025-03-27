import requests
import json

def consultar_fipe(codigo_fipe):
    url = f"https://brasilapi.com.br/api/fipe/preco/v1/{codigo_fipe}"
    resposta = requests.get(url)
    if resposta.status_code == 200:
        return resposta.json()
        resultado = json.loads(resposta.json)
        for item in resultado:
            valor = item.get('valor',)
        print(valor)
        
    else:
        return {"erro": "Não foi possível acessar a tabela FIPE"}

codigo_fipe = "001267-0"  # Exemplo de código FIPE
consultar_fipe(codigo_fipe)