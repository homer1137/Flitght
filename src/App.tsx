import React, {useState} from "react";
import "./App.scss";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { SearchPage } from "./pages/SearchPage/SearchPage";
import {ResultPage} from './pages/ResultPage/ResultPage'

function App() {
  const[ticketData, setTicketData] = useState({to:'', from: '', dateDeparture: '', dateBack: ''});
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SearchPage setTicketData={setTicketData}/>} />
        <Route path="/result" element={<ResultPage ticketData={ticketData}/>} />
      </Routes>
    </Router>
  );
}

export default App;
