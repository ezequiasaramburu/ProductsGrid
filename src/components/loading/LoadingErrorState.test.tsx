import { render, screen } from '@testing-library/react';
import LoadingErrorState from './LoadingErrorState';

describe('LoadingErrorState Component', () => {
  it('renders the message passed via props', () => {
    render(<LoadingErrorState message="Error loading products" />);
    expect(screen.getByText('Error loading products')).toBeInTheDocument();
  });

  it('renders correctly with a loading message', () => {
    render(<LoadingErrorState message="Loading products..." />);
    expect(screen.getByText('Loading products...')).toBeInTheDocument();
  });
});
