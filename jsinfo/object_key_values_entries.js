// 합의된 일련의 자료구조는 key, values, entries를 쓸 수 있음 (map.keys(), set.valuse())
// Map, Set, Array 가 이에 해당

// 그 외는 객체는 아래와 같이 변경 후 사용할 수 있음

let price = {
  banana: 1,
  orange: 2,
  meat: 4,
};

// * Object.methods
// Object.keys(obj) : return arr 객체의 키를 리턴
// Object.valuse(obj) : return arr 객체의 값을 리턴
// Object.entries(obj) : return arr 키,값 쌍을 담은 배열을 리턴
// Object.fromEntries(obj) : (obj)배열을 객체로 변환

let doublePrices = Object.fromEntries(Object.entries(price).map(([key, val]) => [key, val * 2]));
console.log(doublePrices.meat); // 8

// Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 sumSalaries(salaries)를 만들어보세요.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};

function sumSalaries(obj) {
  let totalPrice = 0;
  if (Object.prototype.toString.call(obj).slice(8, -1) === "Object") {
    console.log(Object.values(salaries)); // [100, 300 , 250]  <- 이걸 for of로 돌림
    const object = Object.entries(obj); // {[john : 100],[Pete: 300] ,[Mary: 250 ] }
    for (let o of object) {
      totalPrice = totalPrice + o[1];
    }
  }
  return totalPrice;
}

console.log(sumSalaries(salaries)); // 650
