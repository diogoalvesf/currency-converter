import {
  Background,
  Container,
  ConverterContainer,
  DateContainer,
  DateText,
  InfoText,
  RowContainer,
  TypeText,
} from './styles';
import { Logo } from '../../assets';
import { IconButton, Input, RadioButton } from '../../components';

function Converter() {
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

        <ConverterContainer>
          <RowContainer>
            <Input
              label="Dólar"
              placeholder="$ 1,00"
              style={{ marginRight: 40 }}
            />
            <Input label="Taxa do Estado" placeholder="0 %" />
          </RowContainer>

          <TypeText>Tipo de compra</TypeText>

          <RowContainer style={{ marginTop: 16, marginBottom: 32 }}>
            <RadioButton label="Dinheiro" />
            <RadioButton label="Cartão" />
          </RowContainer>

          <IconButton title="Converter" />
        </ConverterContainer>
      </Container>
    </Background>
  );
}

export default Converter;
