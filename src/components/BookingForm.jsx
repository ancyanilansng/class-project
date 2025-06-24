import React, { useState } from 'react';
import styles from './BookingForm.module.css';

export default function BookingForm({ onSubmit }) {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!date || !time || guests < 1) {
      alert('Please fill all required fields');
      return;
    }
    onSubmit({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking Form" className={styles.form}>
      <h2 className={styles.title}>Reserve Your Table</h2>

      <label htmlFor="res-date">Date</label>
      <input
        id="res-date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />

      <label htmlFor="res-time">Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        required
      >
        <option value="">Select</option>
        <option>18:00</option>
        <option>19:00</option>
        <option>20:00</option>
      </select>

      <label htmlFor="guests">Guests</label>
      <input
        id="guests"
        type="number"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
        required
      />

      <label htmlFor="occasion">Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" className={styles.button}>Book Now</button>
    </form>
  );
}
