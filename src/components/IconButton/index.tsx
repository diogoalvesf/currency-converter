import { ButtonHTMLAttributes } from 'react';
import { StyledIconButton, Title } from './styles';
import { Transfer } from '../../assets';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
}

function IconButton({ title, ...rest }: IconButtonProps) {
  return (
    <StyledIconButton {...rest}>
      <Transfer />
      <Title>{title}</Title>
    </StyledIconButton>
  );
}

export default IconButton;
