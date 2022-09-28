import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import './App.css';
import SignIn from './pages/SignIn';
import User from './pages/User';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/signIn' element={<SignIn />} />
				<Route path='/user' element={<User />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
