const reverseString = function (string) {
  let chars = string.split("");
  let result = [];
  for (let i = chars.length - 1; i >= 0; i--) {
    result.push(chars[i]);
  }
  return result.join("");
};

// Do not edit below this line
module.exports = reverseString;
