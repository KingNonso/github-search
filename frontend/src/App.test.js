import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import App from './App';

afterEach(cleanup)


test('controlled form input updates the state', () => {
  const { getByTestId } = render(<App />);
  fireEvent.submit(getByTestId("form"), {target: {text1: {value: '' } } })

  const linkElement = screen.getByText(/Error: Search/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders this is a js tab on screen', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/JS/i);
  expect(linkElement).toBeInTheDocument();
});
