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

### Localizado na pasta sumArray

   ----

   # **Algoritmo de Soma das Diagonais de uma Matriz Quadrada**

Este Algoritimo contém uma implementação em **JavaScript** que calcula a soma das duas diagonais de uma matriz quadrada. Além disso, o algoritmo exibe a matriz no formato de lista em uma página HTML, atualizando a soma das diagonais no conteúdo de parágrafos da página.

![code](https://github.com/user-attachments/assets/436f22ba-e5d8-4ee1-b7b6-80fb4f0797d6)

---

![print](https://github.com/user-attachments/assets/22f4f9d4-9c2b-46f5-b73c-62576f18ca37)


## **Descrição do Algoritmo**

O algoritmo **`sumDiagonal`** recebe uma matriz quadrada (array bidimensional) como entrada e realiza as seguintes operações:

1. **Calcula a soma da diagonal principal** (do canto superior esquerdo ao canto inferior direito).
2. **Calcula a soma da diagonal secundária** (do canto superior direito ao canto inferior esquerdo).
3. **Exibe a matriz** linha por linha, em formato de lista na página HTML.
4. **Atualiza a página** com os valores das somas das diagonais.

### **Passo a passo do código:**
1. **Seleção dos elementos DOM:**  
   O código seleciona elementos HTML onde os resultados serão exibidos:
   - O elemento com a classe `.diagonalMatriz` é onde a matriz será impressa.
   - Os elementos com a classe `.response` são usados para exibir as somas das diagonais.

2. **Função `sumDiagonal`:**  
   A função percorre a matriz, somando os elementos das diagonais principal e secundária, e exibindo a matriz linha por linha no formato de lista. Além disso, a soma das diagonais é atualizada em dois parágrafos HTML.

   ´´´´javascript
   function sumDiagonal(arr) {
     let diagonalPrimary = 0;
     let diagonalSecundary = 0;
     let $join = "";
     for (let i = 0; i < arr.length; i++) {
       if (arr.length) {
         diagonalPrimary += arr[i][i];
         diagonalSecundary += arr[i][arr.length - 1 - i];

         const $li = document.createElement("li");
         $ul.appendChild($li);
         $join = arr[i].join("") + "\n";
         $li.innerHTML = $join;

         console.log($join);
       } else {
         return;
       }

       $p[0].innerHTML = `A Soma Da Primeira Diagonal e ${diagonalPrimary}`;
       $p[1].innerHTML = `A Soma Da Segunda Diagonal e ${diagonalSecundary}`;
     }

     console.log(diagonalPrimary);
     console.log(diagonalSecundary);
   }

   ### Localizado na pasta sumDiagonal

   ----

