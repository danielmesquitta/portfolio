import React, { createContext, useContext, useState } from 'react';

const ScrollStateContext = createContext<ScrollStateContext>(null);

export const ScrollStateProvider = ({ children }) => {
  const [currentSection, setCurrentSection] = useState(1);

  return (
    <ScrollStateContext.Provider value={{ currentSection, setCurrentSection }}>
      {children}
    </ScrollStateContext.Provider>
  );
};

export const useScrollState = () => useContext(ScrollStateContext);
