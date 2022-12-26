import Reach from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Transaction from './components/pages/transaction';
import Home from './components/pages/home'
import SingleTranscation from './components/pages/singleTranscation';
import Profile from './components/pages/profile'
import Particles from './components/Particle';
import './App.css';
import Signin from './components/authentication/Signin';
import Signup from './components/authentication/Signup';
import axios from 'axios';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/all" element={<Transaction/>}/>
      <Route path="/all/detail/:id" element={<SingleTranscation/>} />
      <Route path="/profile" element={<Profile/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </BrowserRouter>
    <Particles id="tsparticles" />
    </div>
  );
}

export default App;
