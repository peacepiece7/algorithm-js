// * 날짜 생성하기
// 2012년 1월 20일 3시 12분
const date = new Date(2012, 2, 20, 03, 12, 00);

console.log(
  `${date.getFullYear()}년 ${date.getMonth()}월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`
);

// * 날짜를 입력하면 'Mo', "Tu".. 를 출력하는 getWeekDay()만들기

function getWeekDay1(year, month, day) {
  const newDate = new Date(year, month, day);
  const weekDay = newDate.toString().split(' ')[0];
  //   alert(weekDay);
  console.log('weekDay', weekDay);
}

getWeekDay1(2021, 0, 4);

function getWeekDay(date) {
  let days = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];

  console.log('date.getDay()', date.getDay()); // 5
  return days[date.getDay()];
}

let date1 = new Date(2014, 0, 3); // 2014년 1월 3일
console.log('getWeekDay(date1)', getWeekDay(date1)); // FR

// * 유럽 기준 달력 만들기

function getLocalDay(date) {
  const eroupDay = date.getDay();
  console.log(eroupDay);
  if (eroupDay == 0) {
    // 일요일(숫자 0)은 유럽에선 7입니다.
    return 7;
  } else {
    return eroupDay;
  }
}

let date2 = new Date(2019, 11, 5); // 2019년 11월 5일
console.log('getLocalDay(date2)', getLocalDay(date2));

// * 몇 초나 지났을까요?
// * 오늘 하루가 시작된 이후 몇 초나 지났는지 반환하는 함수 getSecondsToday()를 만들어보세요.

function getSecondsToday() {
  let now = new Date();

  // 내일 날짜
  let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  let diff = tomorrow - now; // 차이(ms)
  return Math.round(diff / 1000); // 초로 변환
}
console.log(getSecondsToday());
