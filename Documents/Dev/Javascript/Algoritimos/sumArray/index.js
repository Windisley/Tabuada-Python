const valuearr = document.querySelector("#valuearr");

function sumArray(arr) {
  let minArray = arr[0];
  let sum;
  for (let i = 1; i < arr.length; i++) {
    sum = minArray += arr[i];
  }

  console.log(sum);

  valuearr.innerHTML = sum;
}

sumArray([100, 200]);
