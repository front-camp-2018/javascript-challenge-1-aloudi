/* eslint-disable-next-line */
export const doubleNum = num => {
  const isDoubleNum = num => {
    const numToString = String(num);
    const numberOfDigits = numToString.length;
    const evenDigitsNumber = (numberOfDigits % 2) ? false : true;
    if (evenDigitsNumber) {
      const substringA = numToString.substr(0, numberOfDigits / 2);
      const substringB = numToString.substr(numberOfDigits / 2);
      if (substringA === substringB) {
        return true;
      } else {
        return false;
      }
    } else {
      return false
    }
  }

  if (isDoubleNum(num)) {
    return num;
  } else {
    return num * 2;
  }
  // your logic here...
};
