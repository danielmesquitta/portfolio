import { ModalProps } from '~/components/Modal/types';

interface ModalStateContext {
  isVisible: boolean;
  setIsVisible: (isVisible: boolean) => void;
  data: ModalProps;
  setData: (data: ModalProps) => void;
}
