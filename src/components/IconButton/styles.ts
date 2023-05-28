import styled from 'styled-components';

export const StyledIconButton = styled.button`
  background-color: #00ab63;
  align-items: center;
  justify-content: center;
  display: flex;
  border-radius: 8px;
  padding: 16px;
  width: 149px;
  border: none;

  :disabled {
    background-color: #8c9cad;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-left: 8px;
`;
