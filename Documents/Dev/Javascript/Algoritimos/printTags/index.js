const $strong = document.querySelector(".printtext");

function printTag(number) {
  let text = "";
  let tags = "";
  let space = "\n";

  for (let j = 0; j < number; j++) {
    tags += "#";

    $strong.innerHTML = `${(text += "<br>" + tags + space)}`;
  }
  console.log(text);
}

printTag(5);
