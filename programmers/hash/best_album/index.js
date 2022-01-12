const geners = ["classic", "pop", "classic", "classic", "pop"];
const plays = [500, 600, 150, 800, 2500];

const hashTable = {};
for (i = 0; i < geners.length; i++) {
  let table = {};
  table["plays"] = plays[i];
  table["type"] = geners[i];
  hashTable[i] = table;
}
console.log(hashTable);
for (let [k, v] in hashTable) {
  console.log(hashTable[k].type);
}
