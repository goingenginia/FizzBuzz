const fizzbuzz = document.getElementsByTagName("input");
const elbtn = document.getElementById("btn");

elbtn.addEventListener("click", function() {
  // inputの値を数字型に変える
  let fizz = Number(fizzbuzz[0].value);
  let buzz = Number(fizzbuzz[1].value);

  // 出力結果があれば消す
  while (document.getElementsByTagName("p")[3]) {
    document.getElementsByTagName("p")[3].remove();
  }
  // 両方が数値以外は処理を終える
  if (Number.isNaN(fizz) || Number.isNaN(buzz)) {
    return false;
  }

  // 1から100までを繰り返す
  for (let i = 1; i <= 100; i++) {
    // P要素を作成
    const elp = document.createElement("p");
    // ID emptyにp要素を子要素として追加する
    document.getElementById("empty").appendChild(elp);
    // fizzbuzz fizz buzz の３パターンで条件分岐する
    if (i % fizz === 0 && i % buzz === 0) {
      //p要素の中身に値を入れる
      elp.textContent = "fizzbuzz" + i;
    } else if (i % fizz === 0) {
      // p要素の中身に値を入れる
      elp.textContent = "fizz" + i;
    } else if (i % buzz === 0) {
      //p要素の中身に値を入れる
      elp.textContent = "buzz" + i;
    }
  }
});
