import { ReactNode } from 'react';
import {
  Background,
  RowContainer,
  Container,
  DateContainer,
  DateText,
  InfoText,
} from './styles';
import { Logo } from '../../assets';

interface CommonProps {
  children: ReactNode;
}

function Common({ children }: CommonProps) {
  return (
    <Background>
      <Container>
        <RowContainer>
          <Logo />

          <DateContainer>
            <DateText>14 de janeiro 2021 | 21:00 UTC</DateText>
            <InfoText>
              Dados de câmbio disponibilizados pela Morningstar.
            </InfoText>
          </DateContainer>
        </RowContainer>

        {children}
      </Container>
    </Background>
  );
}

export default Common;
