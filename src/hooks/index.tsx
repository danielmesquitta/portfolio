import { ModalStateProvider, useModalState } from './modalState';
import { ScrollStateProvider, useScrollState } from './scrollState';

const RootProvider: React.FC = ({ children }) => (
  <ScrollStateProvider>
    <ModalStateProvider>{children}</ModalStateProvider>
  </ScrollStateProvider>
);

export { RootProvider, useScrollState, useModalState };
