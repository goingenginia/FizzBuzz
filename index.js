const fizz = document.getElementById("fizzinteger");
const buzz = document.getElementById("buzzinteger");
const elbtn = document.getElementById("btn");

elbtn.addEventListener("click", function () {
  // inputの値を数字型に変える
  let fizznumber = Number(fizz.value);
  let buzznumber = Number(buzz.value);

  // 出力結果があれば消す
  while (document.getElementsByTagName("p")[3]) {
    document.getElementsByTagName("p")[3].remove();
  }
  // 両方が数値以外は処理を終える
  if (Number.isNaN(fizznumber) || Number.isNaN(buzznumber)) {
    return false;
  }

  // 1から100までを繰り返す
  for (let i = 1; i <= 100; i++) {
    // P要素を作成
    const elp = document.createElement("p");
    // ID emptyにp要素を子要素として追加する
    const elempty = document.getElementById("empty").appendChild(elp);
    // fizzbuzz fizz buzz の３パターンで条件分岐する
    if (i % fizznumber === 0 && i % buzznumber === 0) {
      //p要素の中身に値を入れる
      elp.textContent = "fizzbuzz" + i;
    } else if (i % fizznumber === 0) {
      // p要素の中身に値を入れる
      elp.textContent = "fizz" + i;
    } else if (i % buzznumber === 0) {
      //p要素の中身に値を入れる
      elp.textContent = "buzz" + i;
    } else {
      document.getElementById("empty").removeChild(elempty);
    }
  }
});
