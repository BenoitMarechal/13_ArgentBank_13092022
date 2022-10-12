import './App.css';
import React from 'react'
// import ReactDOM from 'react-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';
import SignIn from './pages/SignIn';
import User from './pages/User';
import { Provider } from 'react-redux';
import store from '../src/store/store';
import { selectUser } from './selectors/selectUser';

function App() {
	return (
		<Provider store={store}>
			<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signIn' element={<SignIn />} />
				<Route path='/user' element={<User />} />
			</Routes>
		</BrowserRouter>
		</React.StrictMode>
		</Provider>
		
	);
}

export default App;
