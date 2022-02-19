import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/Home/Home";
import { Routes, Route, useNavigate } from "react-router-dom";
// import Token from "./components/Token";
import Register from "./pages/Log/Register";
import Login from "./pages/Log/Login";
import { useSelector } from "react-redux";
function App() {
	const navigate = useNavigate();
	const user = useSelector((state) => state.userInfo);

	const { userInfo } = user;

	useEffect(() => {
		if (Object.keys(userInfo).length > 0 || typeof userInfo !== undefined) {
			navigate("/");
		} else {
			navigate("/register");
		}
	}, [userInfo, navigate]);
	return (
		<>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</>
	);
}

export default App;
