import { render, screen, fireEvent } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { useOrder } from '../../context/OrderContext';
import ProductList from './ProductList';
import { GET_PRODUCTS } from '../../graphql/queries';

jest.mock('../../context/OrderContext', () => ({
  useOrder: jest.fn(),
}));

const mocks = [
  {
    request: {
      query: GET_PRODUCTS,
    },
    result: {
      data: {
        products: {
          items: [
            {
              id: '1',
              name: 'Product 1',
              description: 'Test description',
              variants: [{ price: 10 }],
              assets: [{ source: 'image1.jpg' }],
            },
            {
              id: '2',
              name: 'Product 2',
              description: 'Another description',
              variants: [{ price: 20 }],
              assets: [{ source: 'image2.jpg' }],
            },
          ],
        },
      },
    },
  },
];

describe('ProductList Component', () => {
  let mockAddItem: jest.Mock;

  beforeEach(() => {
    mockAddItem = jest.fn();
    (useOrder as jest.Mock).mockReturnValue({ addItem: mockAddItem });
  });

  it('renders products when data is available', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );
    expect(await screen.findByText('Product 1')).toBeInTheDocument();
    expect(await screen.findByText('Product 2')).toBeInTheDocument();
    const buttons = await screen.findAllByRole('button', {
      name: /add to order/i,
    });
    expect(buttons).toHaveLength(2);
  });

  it('calls addItem when an "Add to Order" button is clicked', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <ProductList />
      </MockedProvider>
    );
    const buttons = await screen.findAllByRole('button', {
      name: /add to order/i,
    });
    fireEvent.click(buttons[0]);
    expect(mockAddItem).toHaveBeenCalledTimes(1);
    expect(mockAddItem).toHaveBeenCalledWith({
      id: '1',
      name: 'Product 1',
      price: 10,
    });
  });
});
