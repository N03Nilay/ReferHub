import logo from './logo.svg';
import './App.css';
import HomePage from './Components/HomePage';
import Register from './Components/Register';
import Login from './Components/Login';
import DashboardCandidate from './Components/DashboardCandidate';
import RegQues from './Components/RegQues';
import DashboardReferee from './Components/DashboardReferee';
import Notification from './Components/Notification';
import EachReferral from './Components/EachReferral';
import { BrowserRouter as Router } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path='/' element={<HomePage/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/DashboardCandidate' element={<DashboardCandidate/>} />
    <Route path='/RegQues' element={<RegQues/>} />
    <Route path='/notification' element={<Notification />} />
    <Route path='/DashboardReferee' element={<DashboardReferee />} />
    <Route path='/EachReferral' element={<EachReferral />} />

    </Routes>
   </Router>
   
  
   
   </>
  );
}

export default App;
