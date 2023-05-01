import { render, screen } from '@testing-library/react';
import Header from './components/header/Header';
// import GridThumbnails from "./pages/GridThumbnails";
import App from './App';

test('Testing', () => {
  const component = render(<GridThumbnails />);
  const test = component;
  expect(test).toBeInTheDocument();
});
