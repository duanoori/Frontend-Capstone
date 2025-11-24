import React, {useReducer} from "react";
import BookingPage from "./components/BookingPage";

function initializeTimes() {
    return ["17:00", "18:00", "19:00", "20:00", "21:00"];
}

function updateTimes(state, action) {
    if (action.type === 'UPDATE_TIMES') {
        return ["17:00", "18:00", "19:00", "20:00", "21:00"];
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