const participant = ["el", "foo", "bar", "gg", "h"];
const completion = ["el", "foo", "bar", "gg"];

participant.find(
  (p) => {
    console.log(completion);
    console.log(p);
    console.log(completion[p]);
    // 0이 아닐경우 (undifined, null일경우)해당 p를 찾음
    return !completion[p]--;
  },
  completion.map((name) => (completion[name] = (completion[name] | 0) + 1))
);
