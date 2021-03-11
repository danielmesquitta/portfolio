interface ScreenSize {
  width: number;
  height: number;
  size: 'sm' | 'md' | 'lg';
}

interface ScreenSizeContext {
  screenSize: ScreenSize;
}
