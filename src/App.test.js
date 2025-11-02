import { render, screen } from '@testing-library/react';
import App from './App';

/**
 * Tests that the "learn react" link is rendered.
 */
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
