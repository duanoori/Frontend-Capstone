import React, { useState , useEffect} from "react";

function BookingForm({ availableTimes, dispatch , submitForm}) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");


  const [formValid, setFormValid] = useState(false);

  useEffect(() => {
    const isValid =
      date !== "" &&
      time !== "" &&
      guests >= 1 &&
      guests <= 10 &&
      occasion !== "";
    setFormValid(isValid);
  }, [date, time, guests, occasion]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time,
      guests,
      occasion,
    };
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const newDate = e.target.value;
    setDate(newDate);

    // Dispatch action to update available times
    dispatch({ type: 'UPDATE_TIMES', date: newDate });
  };


  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto p-6 bg-white shadow-md rounded space-y-4"
    >
      <label htmlFor="res-date" className="block font-semibold">
        Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange= {handleDateChange}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />

      <label htmlFor="res-time" className="block font-semibold">
        Choose time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      >
        <option value="">Select...</option>
        {availableTimes.map((t) => (
          <option key={t} value={t}>{t}</option>
        ))}
      </select>

      <label htmlFor="guests" className="block font-semibold">
        Number of guests</label>
      <input
        type="number"
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(e.target.value)}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      />

      <label htmlFor="occasion" className="block font-semibold">
        Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
        className="w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-yellow-400"
        required
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <button type="submit" 
      disabled={!formValid} 
      aria-label="On Click"
      className={`w-full py-2 px-4 font-bold rounded text-white transition-colors ${
          formValid
            ? "bg-yellow-400 hover:bg-yellow-500"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        Submit reservation</button>
    </form>
  );
}

export default BookingForm;
