import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Token from "./components/Token";
import Register from "./pages/Log/Register";
import Login from "./pages/Log/Login";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
