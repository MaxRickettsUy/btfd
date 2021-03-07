import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const portfolioElement = screen.getByText(/Portfolio/i);
  const stonkSwapElement = screen.getByText(/StonkSwap/i);

  expect(portfolioElement).toBeInTheDocument();
  expect(stonkSwapElement).toBeInTheDocument();
});
