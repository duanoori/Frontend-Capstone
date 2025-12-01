import React, {useReducer} from "react";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";

import {fetchAPI, submitAPI} from "./api";
import { useNavigate } from "react-router-dom";

function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}

function updateTimes(state, action) {
    if (action.type === 'UPDATE_TIMES') {
        const newDate = new Date(action.date);
        return fetchAPI(newDate);
    }
    return state;
}

function Main() {
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    function submitForm(formData) {
        if (submitAPI(formData)) {
            navigate("/confirmed");
        }
    }

    return (
        <div>
        <BookingPage 
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
        />
        </div>
    );
}
export default Main;