const capitalize = str => {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
};

const reverseString = str => {
  return str.split('').reverse().join('');
};

const calculator = (operator, ...args) => {
  if (operator === 'add') {
    return args.reduce((total, arg) => {
      return total + arg;
    }, 0);
  }
  if (operator === 'subtract') {
    return args.reduce((total, arg) => {
      return total - arg;
    });
  }
  if (operator === 'multiply') {
    return args.reduce((total, arg) => {
      return total * arg;
    });
  }
  if (operator === 'divide') {
    for (let i = 0; i < args.length; i++) {
      if (args[i] === 0) {
        return 'seriously?';
      }
    }
    return args.reduce((total, arg) => {
      return total / arg;
    });
  }
  return;
};

const caesarCipher = (string, key) => {
  alphabet = 'abcdefghijklmnopqrstuvwxyz';
  upperAlphabet = alphabet.toUpperCase();
  encryptedString = '';

  const shiftLetter = (index, alphabetSet) => {
    for (let j = 0; j < key; j++) {
      index = index + 1;
      if (index == 26) {
        index = 0;
      }
    }
    encryptedString += alphabetSet[index];
  };

  for (let i = 0; i < string.length; i++) {
    indexLower = alphabet.indexOf(string[i]);
    indexUpper = upperAlphabet.indexOf(string[i]);
    if (indexLower != -1 && indexUpper == -1) {
      shiftLetter(indexLower, alphabet);
    } else if (indexUpper != -1 && indexLower == -1) {
      shiftLetter(indexUpper, upperAlphabet);
    } else {
      encryptedString += string[i];
    }
  }
  return encryptedString;
};
module.exports = caesarCipher;

const arrayAnalysis = arr => {
  if (arr.length === 0) {
    return null;
  }

  const arrAvg = arr.reduce((acc, cv) => acc + cv) / arr.length;

  const arrMin = arr.reduce((a, b) => {
    return b < a ? b : a;
  });

  const arrMax = arr.reduce((a, b) => {
    return b > a ? b : a;
  });

  return {
    average: arrAvg,
    min: arrMin,
    max: arrMax,
    length: arr.length,
  };
};

module.exports = {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  arrayAnalysis,
};
