import { ButtonHTMLAttributes } from 'react';
import { StyledIconButton, Title } from './styles';
import { ArrowLeft, Transfer } from '../../assets';

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  icon: string;
}

function IconButton({ title, icon, ...rest }: IconButtonProps) {
  const selectIcon = (icon: string) => {
    if (icon === 'transfer') {
      return <Transfer />;
    }

    if (icon === 'arrow-left') {
      return <ArrowLeft />;
    }
  };

  return (
    <StyledIconButton {...rest}>
      {icon && selectIcon(icon)}
      <Title>{title}</Title>
    </StyledIconButton>
  );
}

export default IconButton;
