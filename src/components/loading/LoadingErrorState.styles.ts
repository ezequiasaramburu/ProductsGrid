import styled from 'styled-components';
import { colors } from '../../theme/colors';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${colors.background};
`;

export const Message = styled.div`
  font-size: 1.5rem;
  color: ${colors.text};
  text-align: center;
`;