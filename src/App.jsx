import React from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import BookingForm from './components/BookingForm';
import ConfirmedBooking from './components/ConfirmedBooking';

function Main() {
  const navigate = useNavigate();

  const submitAPI = (data) => {
    return true; // Simulated success
  };

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return <BookingForm onSubmit={submitForm} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/confirmed" element={<ConfirmedBooking />} />
    </Routes>
  );
}
