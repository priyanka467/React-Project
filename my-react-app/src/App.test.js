import { render, screen } from '@testing-library/react';
// import App from './App';
import SplashScreen from '../src/UI_Pages/SplashScreen'

test('renders learn react link', () => {
  render(<SplashScreen />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
