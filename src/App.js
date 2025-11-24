import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
      <Router>
        <Routes>

          <Route path="/" element={<Main />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
