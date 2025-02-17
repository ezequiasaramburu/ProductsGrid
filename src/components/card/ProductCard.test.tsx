import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';

const mockProduct = {
  id: '1',
  name: 'Test Product',
  description: 'This is a test product',
  variants: [{ price: 25 }],
  assets: [{ source: 'https://via.placeholder.com/150' }],
};

describe('ProductCard Component', () => {
  let mockOnAddToOrder: jest.Mock;

  beforeEach(() => {
    mockOnAddToOrder = jest.fn();
  });

  it('renders product details correctly', () => {
    render(
      <ProductCard product={mockProduct} onAddToOrder={mockOnAddToOrder} />
    );
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('This is a test product')).toBeInTheDocument();
    expect(screen.getByText('$25')).toBeInTheDocument();
    expect(screen.getByRole('img', { name: /test product/i })).toHaveAttribute(
      'src',
      mockProduct.assets[0].source
    );
  });

  it('updates quantity when user changes input', () => {
    render(
      <ProductCard product={mockProduct} onAddToOrder={mockOnAddToOrder} />
    );
    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '3' } });
    expect(quantityInput).toHaveValue(3);
  });

  it('calls onAddToOrder with correct arguments when button is clicked', () => {
    render(
      <ProductCard product={mockProduct} onAddToOrder={mockOnAddToOrder} />
    );
    const quantityInput = screen.getByRole('spinbutton');
    fireEvent.change(quantityInput, { target: { value: '2' } });
    const button = screen.getByRole('button', { name: /add to order/i });
    fireEvent.click(button);
    expect(mockOnAddToOrder).toHaveBeenCalledTimes(1);
    expect(mockOnAddToOrder).toHaveBeenCalledWith('1', 'Test Product', 25, 2);
  });
});
