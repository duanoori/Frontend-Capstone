import React from "react";

function ConfirmedBooking() {
  return (
    <main className="p-6 bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="bg-white p-8 rounded shadow-md text-center max-w-md">
        <h1 className="text-2xl font-bold mb-4 text-yellow-400">Booking Confirmed!</h1>
        <p className="text-gray-700">Thank you for your reservation. We look forward to serving you at Little Lemon!</p>
      </section>
    </main>
  );
}

export default ConfirmedBooking;
