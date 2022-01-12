const participant = ["el", "foo", "bar", "gg", "h"];
const completion = ["el", "foo", "bar", "gg"];
const map = new Map();

for (let i = 0; i < participant.length; i++) {
  let a = participant[i];
  let b = completion[i];

  //          map에서 a가 없거나 0일경우 + 1
  map.set(a, (map.get(a) || 0) + 1);
  map.set(b, (map.get(b) || 0) - 1);
}

console.log(map);

const answer = () => {
  for (let [key, value] of map) {
    console.log(key, value);
    if (value > 0) return key;
  }
};
console.log("정답 : ", answer());
