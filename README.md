# **Sum Array Algorithm**

Este algoritmo contém uma resolução simples que calcula a **soma dos elementos de um array** e exibe o resultado na página da web. A implementação foi feita em **JavaScript puro**, utilizando manipulação do DOM para exibir o resultado.

![Soma dos indices do array](https://github.com/user-attachments/assets/cbb9a3a6-69c3-4f41-a47c-1eafa793b97c)


## **Descrição do Algoritmo**

O algoritmo **`sumArray`** recebe um array como parâmetro, percorre seus elementos e calcula a soma total. Ele utiliza um laço `for` para iterar pelos elementos, somando cada valor ao primeiro elemento do array.

### **Passo a passo do código:**
1. **Seleção do elemento DOM:**  
   O elemento HTML com o ID valuearr é capturado usando document.querySelector para exibir o resultado na página.
   javascript
   const valuearr = document.querySelector("#valuearr");

   ----
