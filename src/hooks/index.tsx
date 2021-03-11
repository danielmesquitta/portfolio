import { ModalStateProvider, useModalState } from './modalState';
import { ScreenSizeProvider, useScreenSize } from './screenSize';
import { ScrollStateProvider, useScrollState } from './scrollState';

const RootProvider: React.FC = ({ children }) => (
  <ScreenSizeProvider>
    <ScrollStateProvider>
      <ModalStateProvider>{children}</ModalStateProvider>
    </ScrollStateProvider>
  </ScreenSizeProvider>
);

export { RootProvider, useScrollState, useModalState, useScreenSize };
