let FizzBuzz = document.getElementsByTagName("input");
const elbtn = document.getElementsByTagName("button");
const elsc = document.getElementsByTagName("script");

elbtn[0].addEventListener("click", function() {
  // inputの値を数字型に変える
  let Fizz = Number(FizzBuzz[0].value);
  let Buzz = Number(FizzBuzz[1].value);

  // 出力結果があれば消す
  while (document.getElementsByTagName("p")[3]) {
    document.getElementsByTagName("p")[3].remove();
  }
  // 両方が数値以外は処理を終える
  if (Number.isNaN(Fizz) || Number.isNaN(Buzz)) {
    return false;
  }

  // 1から100までを繰り返す
  for (let i = 1; i <= 100; i++) {
    // P要素を作成
    const elp = document.createElement("p");
    if (i % Fizz === 0 && i % Buzz === 0) {
      //p要素の中身に値を入れる
      elp.textContent = "FizzBuzz" + i;
      // body要素の一番最後の前にbody要素の子要素としてp要素を追加する
      elsc[0].before(document.body.appendChild(elp));
    } else if (i % Fizz === 0) {
      // p要素の中身に値を入れる
      elp.textContent = "fizz" + i;
      // body要素の一番最後の前にbody要素の子要素としてp要素を追加する
      elsc[0].before(document.body.appendChild(elp));
    } else if (i % Buzz === 0) {
      //p要素の中身に値を入れる
      elp.textContent = "buzz" + i;
      // body要素の一番最後の前にbody要素の子要素としてp要素を追加する
      elsc[0].before(document.body.appendChild(elp));
    }
  }
});
