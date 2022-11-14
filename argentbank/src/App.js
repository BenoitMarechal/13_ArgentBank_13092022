import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  );
}

export default App;
