import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch, submitForm}) {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Reserve a Table</h1>
      <p>Fill out the form below to book your table at Little Lemon.</p>

      <BookingForm 
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />

      <p>We look forward to serving you!</p>
    </div>
  );
}

export default BookingPage;
