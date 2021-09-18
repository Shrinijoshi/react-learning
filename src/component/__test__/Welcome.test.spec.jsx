import { render, screen } from '@testing-library/react';
import React from 'react';
import Welcome from '../Welcome';
import '@testing-library/jest-dom/extend-expect';

test('has correct welcome text', () => {
  render(<Welcome firstName='Joshi' lastName='Bhai' />);
  expect(screen.getByRole('heading').textContent).toBe('Welcome, Joshi Bhai');
});

test('has correct input values', () => {
  render(<Welcome firstName='Joshi' lastName='Bhai' />);
  expect(screen.getByRole('form')).toHaveFormValues({
    firstName: 'Joshi',
    lastName: 'Bhai',
  });
});
