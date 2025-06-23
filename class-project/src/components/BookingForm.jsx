import React, { useState } from "react";

function BookingForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: 1,
    occasion: "Birthday",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!formData.date) errs.date = "Date is required";
    if (!formData.time) errs.time = "Time is required";
    if (formData.guests < 1) errs.guests = "At least 1 guest required";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      onSubmit(formData);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Booking form">
      <label htmlFor="date">Date:</label>
      <input
        type="date"
        id="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        required
        aria-required="true"
      />
      {errors.date && <span role="alert">{errors.date}</span>}

      <label htmlFor="time">Time:</label>
      <input
        type="time"
        id="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        required
        aria-required="true"
      />
      {errors.time && <span role="alert">{errors.time}</span>}

      <label htmlFor="guests">Guests:</label>
      <input
        type="number"
        id="guests"
        value={formData.guests}
        min="1"
        onChange={(e) =>
          setFormData({ ...formData, guests: parseInt(e.target.value) })
        }
        required
      />
      {errors.guests && <span role="alert">{errors.guests}</span>}

      <label htmlFor="occasion">Occasion:</label>
      <select
        id="occasion"
        value={formData.occasion}
        onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit">Book Table</button>
    </form>
  );
}

export default BookingForm;
