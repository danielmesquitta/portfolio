import React, { createContext, useContext, useState } from 'react';

import { ModalProps } from '~/components/Modal/types';

import { ModalStateContext } from './types';

const Context = createContext<ModalStateContext>(null);

export const ModalStateProvider: React.FC = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [data, setData] = useState<ModalProps>();

  return (
    <Context.Provider
      value={{
        isVisible,
        setIsVisible,
        data,
        setData,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useModalState = (): ModalStateContext => useContext(Context);
