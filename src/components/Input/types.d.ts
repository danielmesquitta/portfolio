interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  type?: 'input' | 'textarea';
}
