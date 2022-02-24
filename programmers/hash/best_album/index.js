const genres = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

let answer = [];
let map = new Map();

// 장르별로 재생 수 누적
for (let i = 0; i < genres.length; i++) {
  if (map.has(genres[i])) {
    map.set(genres[i], map.get(genres[i]) + plays[i]);
  } else {
    map.set(genres[i], plays[i]);
  }
}
