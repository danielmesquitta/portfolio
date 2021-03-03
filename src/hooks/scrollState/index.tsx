import React, { createContext, useContext, useState } from 'react';

const ScrollStateContext = createContext<ScrollStateContext>(null);

export const ScrollStateProvider = ({ children }) => {
  const [isOnHeroSection, setIsOnHeroSection] = useState(true);

  return (
    <ScrollStateContext.Provider
      value={{ isOnHeroSection, setIsOnHeroSection }}
    >
      {children}
    </ScrollStateContext.Provider>
  );
};

export const useScrollState = () => useContext(ScrollStateContext);
