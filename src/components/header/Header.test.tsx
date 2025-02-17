import { render, screen, fireEvent } from '@testing-library/react';
import { useOrder } from '../../context/OrderContext';
import Header from './Header';
import '@testing-library/jest-dom';

jest.mock('../../context/OrderContext', () => ({
  useOrder: jest.fn(),
}));

describe('Header Component', () => {
  it('renders subtotal, and delete icon', () => {
    (useOrder as jest.Mock).mockReturnValue({
      subtotal: 100.5,
      clearOrder: jest.fn(),
    });
    render(<Header />);
    expect(screen.getByText(/\$100.50/)).toBeInTheDocument();
    expect(screen.getByTestId('DeleteIcon')).toBeInTheDocument();
  });

  it('calls clearOrder when delete icon is clicked', () => {
    const mockClearOrder = jest.fn();
    (useOrder as jest.Mock).mockReturnValue({
      subtotal: 50.75,
      clearOrder: mockClearOrder,
    });
    render(<Header />);
    const deleteIcon = screen.getByTestId('DeleteIcon');
    fireEvent.click(deleteIcon);
    expect(mockClearOrder).toHaveBeenCalledTimes(1);
  });

  it('renders default subtotal when subtotal is undefined', () => {
    (useOrder as jest.Mock).mockReturnValue({
      subtotal: undefined,
      clearOrder: jest.fn(),
    });
    render(<Header />);
    expect(screen.getByText(/\$0(\.00)?/)).toBeInTheDocument();
  });
});
