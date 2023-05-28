import styled from 'styled-components';
import mask from '../../images/mask.png';

export const Background = styled.div`
  height: 100vh;
  background: #e5e5e5 url(${mask}) right bottom no-repeat;
  background-size: contain;
`;

export const Container = styled.div`
  padding: 79.13px 64px;
`;

export const RowContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const DateContainer = styled.div`
  margin-left: 48px;
  margin-top: 8px;
`;

export const DateText = styled.p`
  color: #45505e;
  font-weight: 500;
  font-size: 18px;
`;

export const InfoText = styled.p`
  color: #8c9cad;
  font-size: 14px;
  margin-top: 8px;
`;

export const ConverterContainer = styled.div`
  margin-top: 105px;
`;

export const TypeText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #2e3742;
  margin-top: 32px;
`;
