export default (str: string): string[] => {
  const letters = [];
  for (let i = 0; i < str.length; i += 1) {
    letters.push(str[i]);
  }
  return letters;
};
