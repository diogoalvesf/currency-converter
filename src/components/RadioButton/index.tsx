import { InputHTMLAttributes } from 'react';
import { Container, StyledLabel, StyledRadioButton } from './styles';

interface RadioButtonProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

function RadioButton({ label, ...rest }: RadioButtonProps) {
  return (
    <Container>
      <StyledRadioButton id="radio-button" type="radio" {...rest} />
      <StyledLabel htmlFor="radio-button">{label}</StyledLabel>
    </Container>
  );
}

export default RadioButton;
