const clothes = [
  ["yellowhat", "headgear"],
  ["bluesunglasses", "eyewear"],
  ["green_turban", "headgear"],
  ["yellow_turban", "headgear"],
  ["red_turban", "face"],
  ["black_turban", "face"],
];

// [["yellowhat", "headgear"], ["bluesunglasses", "eyewear"], ["green_turban", "headgear"]]

function solution(clothes) {
  let answer = 1;
  const ob = {};
  for (let i = 0; i < clothes.length; i++) {
    ob[clothes[i][1]] = ob[clothes[i][1]] ? ob[clothes[i][1]] + 1 : 2;
  }

  for (var key in ob) {
    answer *= ob[key];
  }

  return answer - 1;
}

solution(clothes);

function solution1(clothes) {
  var answer = 1;
  var obj = {};
  for (var i = 0; i < clothes.length; i++) {
    obj[clothes[i][1]] = (obj[clothes[i][1]] || 1) + 1;
  }
  console.log(obj);

  for (var key in obj) {
    answer *= obj[key];
  }

  return answer - 1;
}
solution1(clothes);
