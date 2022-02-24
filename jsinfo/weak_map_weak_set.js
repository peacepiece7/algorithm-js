// map의 값은 gc의 대상이 되지 않음 (참조 값이더라도)
// weakMap은 gc의 대상아 됨
let weakMap = new WeakMap();
let obj = {};
weakMap.set(obj, "hello"); // key는 반드시 객체여야 함

// useage 1. 추가 데이터 (방문 횟수)
// useage 2. 캐싱

// 예제

let messages = [
  { text: "Hello", from: "John" },
  { text: "How goes?", from: "John" },
  { text: "See you soon", from: "Alice" },
];
const weakSet1 = new WeakSet();
messages.forEach((v) => {
  weakSet1.add(v);
});
console.log(weakSet1.has(messages[0])); // true

const weakMap1 = new WeakMap();
messages.forEach((v) => {
  weakMap1.set(v, { readAt: Date.now() });
});
console.log(weakMap1.get(messages[0]));

messages = null; // arr의 참조 객채도 모두 GC의 대상아 됩니다.
