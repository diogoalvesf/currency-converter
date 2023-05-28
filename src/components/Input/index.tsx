import { InputHTMLAttributes } from 'react';
import { Container, StyledInput, StyledLabel } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function Input({ label, ...rest }: InputProps) {
  return (
    <Container>
      <StyledLabel>{label}</StyledLabel>
      <StyledInput {...rest} />
    </Container>
  );
}

export default Input;
