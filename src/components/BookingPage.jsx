import React from "react";
import BookingForm from "./BookingForm";

function BookingPage({availableTimes, dispatch, submitForm}) {
  return (
    <main  className="p-6 bg-gray-50 min-h-screen flex flex-col items-center">
      <section className="max-w-2xl w-full">
        <h1 className="text-3xl font-bold mb-4 text-center">Reserve a Table</h1>
        <p className="mb-6 text-gray-700 text-center">
          Fill out the form below to book your table at Little Lemon.
        </p>

        <BookingForm 
          availableTimes={availableTimes}
          dispatch={dispatch}
          submitForm={submitForm}
        />

        <p  className="mt-6 text-gray-600 text-center">We look forward to serving you!</p>
      </section>
    </main>
  );
}

export default BookingPage;
