import styled from 'styled-components';
import { useOrder } from '../context/OrderContext';
import DeleteIcon from '@mui/icons-material/Delete';

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
  margin-right: 1rem;
  font-size: 1.5rem;
  font-weight: bold;
`;

const Box = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

export function Header() {
  const { subtotal, clearOrder } = useOrder() || {};

  return (
    <HeaderContainer>
      <Logo
        src="https://santex.wpengine.com/wp-content/uploads/2019/02/logo-santex@3x.png"
        alt="Santex logo"
      />
      <Box>
        <Subtotal>${subtotal?.toFixed(2) || 0}</Subtotal>
        <DeleteIcon onClick={clearOrder} style={{ cursor: 'pointer' }} />
      </Box>
    </HeaderContainer>
  );
}
