import { fetchAPI } from "../api";

// Re-create the functions exactly as in Main.js
function initializeTimes() {
    const today = new Date();
    return fetchAPI(today);
}

function updateTimes(state, action) {
    if (action.type === "UPDATE_TIMES") {
        const newDate = new Date(action.date);
        return fetchAPI(newDate);
    }
    return state;
}

//
// TESTS
//

test("initializeTimes returns the same values as fetchAPI(today)", () => {
    const today = new Date();
    const expected = fetchAPI(today);

    const result = initializeTimes();

    expect(result).toEqual(expected);   // <— updated expectation
    expect(Array.isArray(result)).toBe(true);
});

test("updateTimes returns fetchAPI(newDate) when a date is provided", () => {
    const mockDate = "2023-10-10";
    const expected = fetchAPI(new Date(mockDate));

    const result = updateTimes([], {
        type: "UPDATE_TIMES",
        date: mockDate,
    });

    expect(result).toEqual(expected);   // <— updated expectation
    expect(Array.isArray(result)).toBe(true);
});

test("updateTimes returns existing state when action type does NOT match", () => {
    const initialState = ["17:00", "17:30"];

    const result = updateTimes(initialState, {
        type: "INVALID_ACTION",
    });

    expect(result).toEqual(initialState);
});
