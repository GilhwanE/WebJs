const quoteElement = document.querySelector('.quote-contents');

const quoteItem = localStorage.getItem('quote');
const nowDate = new Date();
const month = nowDate.getMonth() + 1;
const date = nowDate.getDate();

//명언 결과값 화면에 출력
const quoteView = (result) => {
  let quote = { createDate: `${month}-${date}`, quoteData: result };
  localStorage.setItem('quote', JSON.stringify(quote));
  quoteElement.textContent = result;
};

const quoteAPI = async () => {
  try {
    const data = await fetch(`https://random-quote.hyobb.com/`).then((res) => {
      res.json();
    });
    const result = data[1].respond;
    quoteView(result);
    console.log(result);
  } catch (err) {
    console.log(`error:${err}`);
    quoteView('명언이 들어간다');
  }
};

if (quoteItem) {
  let { createDate, quoteData } = JSON.parse(quoteItem);
  if (createDate === `${month}-${date}`) {
    quoteElement.textContent = `"${quoteData}"`;
  }
} else {
  quoteAPI();
}

// fetch 함수는 비동기 함수이다. 따라서 async await 키워드가 따라와야한다.
