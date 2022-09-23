import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './LandingPage';
import Create from './Create';
import Event from './Event';
import 'bootstrap/dist/css/bootstrap.css';
import "react-datepicker/dist/react-datepicker.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/create" element={<Create />} />
            <Route path="/event" element={<Event />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
