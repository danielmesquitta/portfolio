interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  appearance: 'primary' | 'secondary';
  outline?: boolean;
  hasHover?: boolean;
  size?: 'sm' | 'md';
  href?: string;
  target?: '_blank';
  as?: 'a';
  rel?: 'noreferrer';
}
