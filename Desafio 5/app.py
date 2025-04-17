lista_generica = []
linguagens_de_programação = ["javascript","python","C","C++"]
lingua1 = input("qual a primeira linguagem de programação?")
lingua2 = input("qual a segunda linguagem de programação?")
lingua3 = input("qual a terceira linguagem de programação?")
def adicionarLinguagens(lng):
    linguagens_de_programação.append(lng)
adicionarLinguagens(lingua1)
adicionarLinguagens(lingua2)
adicionarLinguagens(lingua3)
print(linguagens_de_programação)