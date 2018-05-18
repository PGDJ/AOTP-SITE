function repeatStringNumTimes(string, times) {
  if (times > 0) {
    return string.repeat(times); // return "abc".repeat(3); => return "abcabcabc";
  }
  return '';
}

const shoe = x => repeatStringNumTimes('shoe ', x);
const one = shoe(1);

console.log(one);
