import { render, screen } from '@testing-library/react';
import App from '../App';
import Clients from '../Clients';
import Customers from '../Customers';

test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Update Life Cycle with Hook/i);
  expect(linkElement).toBeInTheDocument();
})
test("test_case02", () => {
  const { getByText } = render(<Customers />);
  expect(getByText("componentDidMount() Used")).toBeInTheDocument();
})
test("test_case03", () => {
  const { getByText } = render(<Clients />);
  expect(getByText("UseEffect Hook Used")).toBeInTheDocument();
});