import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import { breakpoints } from '~/styles';

const ScreenSizeContext = createContext<ScreenSizeContext>(null);

export const ScreenSizeProvider: React.FC = ({ children }) => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    height: 0,
    width: 0,
    size: 'lg',
  });

  const updateScreenSize = useCallback(() => {
    if (window.innerWidth > Number(breakpoints.md.replace('px', '')))
      return setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        size: 'lg',
      });
    if (window.innerWidth <= Number(breakpoints.sm.replace('px', '')))
      return setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        size: 'sm',
      });
    if (window.innerWidth <= Number(breakpoints.md.replace('px', '')))
      return setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
        size: 'md',
      });
    return null;
  }, []);

  useEffect(() => {
    updateScreenSize();
    window.addEventListener('resize', () => updateScreenSize());
    return window.removeEventListener('resize', () => null);
  }, [updateScreenSize]);

  return (
    <ScreenSizeContext.Provider
      value={{
        screenSize,
      }}
    >
      {children}
    </ScreenSizeContext.Provider>
  );
};

export const useScreenSize = (): ScreenSizeContext =>
  useContext(ScreenSizeContext);
