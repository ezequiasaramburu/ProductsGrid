import { MockedProvider } from '@apollo/client/testing';
import { render, screen } from '@testing-library/react';
import HomePage from './HomePage';
import { GET_PRODUCTS } from '../graphql/queries';

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
              description: 'Description of product 1',
              variants: [{ price: 10 }],
              assets: [{ source: 'image_url_1' }],
            },
          ],
        },
      },
    },
  },
];

describe('HomePage Component', () => {
  it('renders HomePage with Header and ProductList', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <HomePage />
      </MockedProvider>
    );
    expect(screen.getByAltText(/Santex logo/i)).toBeInTheDocument();
    expect(await screen.findByText('Product 1')).toBeInTheDocument();
  });
});
