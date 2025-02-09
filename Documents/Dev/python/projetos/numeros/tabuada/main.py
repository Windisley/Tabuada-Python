number =int(input('Informe a Tabuada: '))
tabuada = []
for n in range(1,11):
    result = number*n
    tabuada.append(f'{number } X {n}= {result}')

for linha in tabuada:
    print(linha)

