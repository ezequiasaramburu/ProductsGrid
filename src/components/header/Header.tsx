import { useOrder } from '../../context/OrderContext';
import DeleteIcon from '@mui/icons-material/Delete';
import { HeaderContainer, Logo, Subtotal, Box } from './Header.styles';

const Header: React.FC = () => {
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
};

export default Header;
