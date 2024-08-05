import './App.css';
import NavBar from './components/NavBar/NavBar';
import QuizState from './context/QuizState';
import Home from './pages/Home/Home';
import {
  Routes,
  Route
} from "react-router-dom";
import About from './pages/About/About';
import ReviewAnswer from './pages/Review/ReviewAnswer';
import Login from './components/User/Login'
import Signup from './components/User/Signup'
import axios from 'axios';
import Profile from './components/User/Profile';
import Dashboard from './components/User/Dashboard';

axios.defaults.baseURL = "http://localhost:4001"
axios.defaults.withCredentials = true

function App() {

  return (
    <>
      <QuizState>
        <div className="App">
          <NavBar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/review" element={<ReviewAnswer />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/Signup" element={<Signup />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/dashboard" element={<Dashboard />} />    
          </Routes>
        </div>
      </QuizState>
    </>
  );
}

export default App;
