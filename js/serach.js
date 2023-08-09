const serachElement = document.getElementById('serach');

const serachResult = () => {
  const resultvalue = serachElement.value;
  window.location.href = `https://www.google.com/search?q=${resultvalue}`;
};

const enterKey = (event) => {
  if (event.code === 'Enter') {
    serachResult();
  }
};

serachElement.addEventListener('keypress', (event) => {
  enterKey(event);
});
