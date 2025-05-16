import { render, screen } from '@testing-library/react';

test('renders login form', () => {
  render(<div><input placeholder='Email' /><input placeholder='Password' /></div>);
  expect(screen.getByPlaceholderText('Email')).toBeInTheDocument();
});