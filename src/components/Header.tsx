import styled from 'styled-components';
import { useOrder } from '../context/OrderContext';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: red;
  padding: 1rem 2rem;
  box-shadow: 0 4px 2px -2px gray;
`;

const Logo = styled.img`
  max-height: 40px;
`;

const Subtotal = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export function Header() {
  const { subtotal } = useOrder() || {};

  return (
    <HeaderContainer>
      <Logo
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="Santex logo"
      />
      <Subtotal>${subtotal?.toFixed(2) || 0}</Subtotal>
    </HeaderContainer>
  );
}
