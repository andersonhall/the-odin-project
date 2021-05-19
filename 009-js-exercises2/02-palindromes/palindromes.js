const palindromes = function (str) {
  const newStr = str.toLowerCase().replace(/[^A-Za-z]/g, '');
  return newStr.split('').reverse().join('') == newStr;
};

module.exports = palindromes;
