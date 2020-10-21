module.exports = function reverse (n) {
  let reverseNum = n.toString().split('').reverse('').join('');

  if(n < 0) {
    reverseNum = reverseNum.slice(0, -1);
    return +reverseNum;
  }

  return +reverseNum;
}
