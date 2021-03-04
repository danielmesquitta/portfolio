interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: 'primary' | 'secondary';
  outline?: boolean;
  hasHover?: boolean;
  size?: 'sm' | 'md';
}
