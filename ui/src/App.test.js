import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  // const portfolioElement = screen.getByText(/Portfolio/i);
  // const stonkSwapElement = screen.getByText(/StonkSwap/i);
  const welcomeElement = screen.getByText(/Welcome Back/i);

  // expect(portfolioElement).toBeInTheDocument();
  // expect(stonkSwapElement).toBeInTheDocument();
  expect(welcomeElement).toBeInTheDocument();
});
