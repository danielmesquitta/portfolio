const generateArray = (length: number, initialValue = 0) => {
  const array = [];
  while (array.length < length) {
    array.push(initialValue);
    initialValue += 1;
  }
  return array;
};

export default generateArray;
