import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';


//The purpose of these tests is to ensure correct rendering of the componenet
//This type of testing is called unit testing
//This is called a test suite
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/sword art gamers/i);
  expect(linkElement).toBeInTheDocument();
});
