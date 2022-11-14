import './App.css';
import React from 'react';
// import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import './App.css';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore } from 'redux-persist';
import { useSelector } from 'react-redux';

let persistor = persistStore(store);

function App() {
  const user = useSelector((state) => state.userReducer);
  return (
    <PersistGate loading={null} persistor={persistor}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  );
}

export default App;
