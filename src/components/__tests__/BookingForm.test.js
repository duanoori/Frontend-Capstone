import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import BookingForm from "../BookingForm";

describe("BookingForm Tests", () => {
  let submitMock;

  beforeEach(() => {
    submitMock = jest.fn();

    render(
      <BookingForm
        availableTimes={["17:00", "18:00"]}
        dispatch={() => {}}
        submitForm={submitMock}
      />
    );
  });

  // ------------------------------
  // Step 1: HTML5 Validation
  // ------------------------------

  test("date input is required", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    expect(dateInput).toBeRequired();
  });

  test("time select is required", () => {
    const timeSelect = screen.getByLabelText(/choose time/i);
    expect(timeSelect).toBeRequired();
  });

  test("guests input is required and has min=1, max=10", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    expect(guestsInput).toBeRequired();
    expect(guestsInput).toHaveAttribute("min", "1");
    expect(guestsInput).toHaveAttribute("max", "10");
  });

  test("occasion select is required", () => {
    const occasionSelect = screen.getByLabelText(/occasion/i);
    expect(occasionSelect).toBeRequired();
  });

  // ------------------------------
  // Step 2: React Validation (button enable/disable)
  // ------------------------------

  test("submit button is disabled initially", () => {
    const button = screen.getByRole("button", { name: /submit reservation/i });
    expect(button).toBeDisabled();
  });

  test("submit button enabled when all fields are valid", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const button = screen.getByRole("button", { name: /submit reservation/i });

    fireEvent.change(dateInput, { target: { value: "2025-12-05" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    expect(button).not.toBeDisabled();
  });

  test("submit button remains disabled with invalid guests", () => {
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const button = screen.getByRole("button", { name: /submit reservation/i });

    fireEvent.change(guestsInput, { target: { value: "0" } });
    expect(button).toBeDisabled();

    fireEvent.change(guestsInput, { target: { value: "11" } });
    expect(button).toBeDisabled();
  });

  // ------------------------------
  // Step 3: Form Submission
  // ------------------------------

  test("form calls submitForm with correct data when submitted", () => {
    const dateInput = screen.getByLabelText(/choose date/i);
    const timeSelect = screen.getByLabelText(/choose time/i);
    const guestsInput = screen.getByLabelText(/number of guests/i);
    const occasionSelect = screen.getByLabelText(/occasion/i);
    const button = screen.getByRole("button", { name: /submit reservation/i });

    fireEvent.change(dateInput, { target: { value: "2025-12-05" } });
    fireEvent.change(timeSelect, { target: { value: "17:00" } });
    fireEvent.change(guestsInput, { target: { value: "4" } });
    fireEvent.change(occasionSelect, { target: { value: "Birthday" } });

    fireEvent.click(button);

    expect(submitMock).toHaveBeenCalledTimes(1);
    expect(submitMock).toHaveBeenCalledWith({
      date: "2025-12-05",
      time: "17:00",
      guests: "4", // comes as string from input
      occasion: "Birthday",
    });
  });
});
