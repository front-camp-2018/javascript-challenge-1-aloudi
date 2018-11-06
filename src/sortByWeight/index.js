/* eslint-disable-next-line */
export const sortByWeight = arr => {

  const findWeight = (entry) => {
    const numArray = entry.split('');
    const weight = numArray.reduce((accumulator, currentValue) => {
      return Number(accumulator) + Number(currentValue);
    }, 0)
    return weight;
  }

  const mergeSort = (arr) => {
    if (arr.length === 1) {
      return arr
    }
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    return merge(
      mergeSort(left),
      mergeSort(right)
    )
  }

  const merge = (left, right) => {
    let result = [];
    let indexLeft = 0;
    let indexRight = 0;
    while (indexLeft < left.length && indexRight < right.length) {
      if (findWeight(left[indexLeft]) < findWeight(right[indexRight])) {
        result.push(left[indexLeft]);
        indexLeft++;
      } else {
        result.push(right[indexRight]);
        indexRight++;
      }
    }
    return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight))
  }

  return mergeSort(arr);
  // your logic here...
};
