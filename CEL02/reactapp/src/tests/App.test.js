import { render, screen } from '@testing-library/react';
import App from '../App';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Now the Time/i);
  expect(linkElement).toBeInTheDocument();
})
test('test_case02', () => {
  render(<App />);
  const linkElement = screen.getByText(/Check Life Cycle of Clock Component/i);
  expect(linkElement).toBeInTheDocument();
});