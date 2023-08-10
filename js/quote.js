const quoteElement = document.querySelector('.quote-contents');

//명언 결과값 화면에 출력

const quoteView = (result) => {
  quoteElement.textContent = result;
};

const quoteAPI = async () => {
  try {
    const data = await fetch('https://random-quote.hyobb.com/').then((res) => {
      res.json();
    });
    const result = data[1].respond;
    quoteView(result);
  } catch (err) {
    console.log(`error:${err}`);
    quoteView('명언이 들어간다');
  }
};

quoteAPI();

// fetch 함수는 비동기 함수이다. 따라서 async await 키워드가 따라와야한다.
