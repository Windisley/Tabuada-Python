const $ul = document.querySelector(".diagonalMatriz");
const $p = document.querySelectorAll(".response");

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

sumDiagonal([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);
