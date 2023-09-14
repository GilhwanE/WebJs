const serachElement = document.getElementById('serach');

const serachResult = () => {
  let resultvalue = serachElement.value;
  window.location.href = `https://www.google.com/search?q=${resultvalue}`;
  resultvalue = ''; // 검색후 input값 초기화
};

const enterKey = (event) => {
  if (event.code === 'Enter') {
    serachResult();
  }
};

serachElement.addEventListener('keypress', (event) => {
  enterKey(event);
});
