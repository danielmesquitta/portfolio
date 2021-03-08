import { ImgHTMLAttributes } from 'react';

interface ModalButton extends ButtonProps {
  label: string | JSX.Element;
}

interface ModalWrapperProps {
  isVisible: boolean;
}

interface ModalProps {
  buttons?: ModalButton[];
  images?: ImgHTMLAttributes<HTMLImageElement>[];
  title?: string | JSX.Element;
  content?: string | JSX.Element;
}
