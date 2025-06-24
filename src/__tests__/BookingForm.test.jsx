import { render, screen } from '@testing-library/react';
import BookingForm from '../components/BookingForm';

test('renders booking form fields', () => {
  render(<BookingForm onSubmit={() => {}} />);
  expect(screen.getByLabelText(/date/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/guests/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/occasion/i)).toBeInTheDocument();
});
