import styled from 'styled-components';
import { colors } from '../../theme/colors'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${colors.primary};
  padding: 1rem 2rem;
  box-shadow: 0 4px 2px -2px gray;
`;

export const Logo = styled.img`
  max-height: 40px;
`;

export const Subtotal = styled.div`
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: ${colors.white};
`;
