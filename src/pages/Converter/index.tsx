import { ConverterContainer, RowContainer, TypeText } from './styles';
import { Common, IconButton, Input, RadioButton } from '../../components';

function Converter() {
  return (
    <Common>
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

        <IconButton icon="transfer" title="Converter" />
      </ConverterContainer>
    </Common>
  );
}

export default Converter;
