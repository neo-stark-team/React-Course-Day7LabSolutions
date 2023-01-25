import { render, screen } from '@testing-library/react';
import App from '../App';
import CountMe from '../CountMe';
import FuncCountME from '../FuncCountME';


test('test_case01', () => {
  render(<App />);
  const linkElement = screen.getByText(/Update Life Cycle with Hook/i);
  expect(linkElement).toBeInTheDocument();
})
test("test_case02", () => {
  const { getByText } = render(<CountMe />);
  expect(getByText("Counting :")).toBeInTheDocument();
})
test("test_case03", () => {
  const { getByText } = render(<FuncCountME />);
  expect(getByText("Counting :")).toBeInTheDocument();
});