const bodyElem = document.body;
bodyElem.classList.remove("active");

/* --------------------------------------------- 
    ▼▼▼ [Enterキー]にて発火される処理 start ▼▼▼
---------------------------------------------- */
const funcWrap = () => {

  /* ------------------------- 
    配列シャッフル関数
  -------------------------- */
  const shuffleArray = (array) => {
    const cArray = [...array];
    for (let i = cArray.length - 1; i >= 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      let tStorage = cArray[i];
      cArray[i] = cArray[rand];
      cArray[rand] = tStorage;
    }
    return cArray;
  };

  /* ------------------------- 
    DOM代入関数
  -------------------------- */
  const shuffleFunc = () => {
    const lArray = document.querySelector(
      ".mc-quiz-question--container--3GZ4h .ud-unstyled-list"
    );
    shuffleArray(lArray.children).forEach((element) => {
      lArray.appendChild(element);
    }, false);
    bodyElem.classList.add("active");
  };
  shuffleFunc(); // 初期発火

  /* ------------------------- 
    要素の変化監視
  -------------------------- */
  const elem = document.getElementsByClassName(
    "test-timer--question-count--4_h5P"
  )[0];
  const observer = new MutationObserver(function () {
    bodyElem.classList.remove("active");
    setTimeout(() => shuffleFunc(), 300);
  });
  const config = {
    childList: true, //直接の子の変更を監視
    characterData: true, //文字の変化を監視
    characterDataOldValue: true, //属性の変化前を記録
    attributes: true, //属性の変化を監視
    subtree: true, //全ての子要素を監視
  };
  observer.observe(elem, config);

}; // funcWrap -end-

/* --------------------------------------------- 
    ▼▼▼ [Enterキー]にて発火処理 start ▼▼▼
---------------------------------------------- */
document.addEventListener("keydown", (event) => {
  const keyName = event.key;
  if (keyName == "Enter") {
    bodyElem.classList.add("running");
    funcWrap();
  }
}); // addEventListener -end-
