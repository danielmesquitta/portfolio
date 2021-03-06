export default (
  elementRef: HTMLElement,
  fromOffset: 'top' | 'left' | 'bottom' | 'right'
) => {
  const offset = `offset${
    fromOffset[0].toUpperCase() + fromOffset.substring(1)
  }`;
  let elem = elementRef;
  let position = 0;
  do {
    if (!isNaN(elem?.[offset])) {
      position += elem?.[offset];
    }
  } while ((elem = elem?.offsetParent as any));
  if (fromOffset === 'top') {
    position -= window.innerHeight;
  }
  return position;
};
