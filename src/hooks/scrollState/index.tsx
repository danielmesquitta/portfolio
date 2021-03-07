import React, { createContext, useCallback, useContext, useState } from 'react';

const ScrollStateContext = createContext<ScrollStateContext>(null);

export const ScrollStateProvider: React.FC = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(1);

  const getScrollPosition = useCallback(
    () =>
      document?.body?.scrollTop || document?.documentElement?.scrollTop || 0,
    []
  );

  const getElementPosition: GetElementPosition = useCallback(
    (elementRef, fromOffset) => {
      const offset = `offset${
        fromOffset[0].toUpperCase() + fromOffset.substring(1)
      }`;
      let elem = elementRef;
      let position = 0;
      do {
        if (typeof elem?.[offset] !== 'number') {
          position += elem?.[offset];
        }
        // eslint-disable-next-line
      } while ((elem = elem?.offsetParent as any));
      if (fromOffset === 'top') {
        position -= window.innerHeight;
      }
      return position;
    },
    []
  );

  return (
    <ScrollStateContext.Provider
      value={{
        currentSection,
        setCurrentSection,
        getScrollPosition,
        getElementPosition,
      }}
    >
      {children}
    </ScrollStateContext.Provider>
  );
};

export const useScrollState = (): ScrollStateContext =>
  useContext(ScrollStateContext);
