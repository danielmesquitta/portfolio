type GetElementPosition = (
  elementRef: HTMLElement,
  fromOffset: 'top' | 'left' | 'bottom' | 'right'
) => number;

interface ScrollStateContext {
  currentSection: number;
  setCurrentSection: (currentSection: number) => void;
  getScrollPosition: () => number;
  getElementPosition: GetElementPosition;
}
