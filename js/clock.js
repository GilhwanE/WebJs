const dateElement = document.getElementById('date');
const timeElement = document.getElementById('time');

// 시간 표기법 number가 10보다 크면 0
// 매개변수를 숫자랑 비교해야한다 임의로 자료형으로 변환해주는 묵시적 형변환 숫자로 무조권 변환
const modifyNumber = (number) => {
  return parseInt(number) < 10 ? `0${number} ` : number;
};

// 오늘의 날짜 (년도, 월, 일, 요일, 시간)
const getNowDate = () => {
  const nowDate = new Date();
  const week = [
    '일요일',
    '월요일',
    '화요일',
    '수요일',
    '목요일',
    '금요일',
    '토요일',
  ];
  let month = modifyNumber(nowDate.getMonth() + 1);
  let date = modifyNumber(nowDate.getDate());
  let day = nowDate.getDay();
  setNowDate(month, date, week[day]);
  // week배열의 day
};

// Text로 표기하는 방법
const setNowDate = (month, date, day) => {
  dateElement.textContent = `${month}월 ${date}일 ${day}`;
};

// 현재시각 표기
const getNowTime = () => {
  const nowDate = new Date();
  let hour = modifyNumber(nowDate.getHours());
  let minutes = modifyNumber(nowDate.getMinutes());
  setNowTime(hour, minutes);
};

const setNowTime = (hour, minutes) => {
  timeElement.textContent = `${hour}:${minutes}`;
};

getNowDate();
getNowTime();

setInterval(getNowTime(), 100);
