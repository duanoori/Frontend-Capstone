import fetchAPI from "./api";
import React, {useReducer} from "react";
import BookingPage from "./components/BookingPage";

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
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);
    return (
        <div>
        <BookingPage 
        availableTimes={availableTimes}
        dispatch={dispatch}
        />
        </div>
    );
}
export default Main;