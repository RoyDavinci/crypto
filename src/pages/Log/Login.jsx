import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../../actions/userAction";

import "./login.css";

const Login = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.loginInfo);
	const [values, setValues] = useState({ email: "", password: "" });
	const [show, setShow] = useState(false);

	const { loginInfo } = user;
	console.log(loginInfo.email);

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			signIn({
				email: values.email,
				password: values.password,
			})
		);
	};

	// useEffect(() => {
	// 	if (
	// 		loginInfo.email.email === values.email &&
	// 		loginInfo.email.password === values.password
	// 	) {
	// 		navigate("/");
	// 	// } else {
	// 	// 	setShow(!show);
	// 	// }
	// }, [navigate, loginInfo, values, show]);

	return (
		<div className='loginContainer'>
			{show ? <small>email or password incorrect</small> : ""}
			<form action='' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='email'>Enter Email</label>
					<input
						type='email'
						id='email'
						name='email'
						value={values.email}
						onChange={handleChange}
					/>
					{show ? <small>email incorrect</small> : ""}
				</div>
				<div className='form-group'>
					<label htmlFor='password'>Password</label>
					<input
						type='password'
						id='password'
						name='password'
						value={values.password}
						onChange={handleChange}
					/>
				</div>
				<button>Submit</button>

				<p>
					Already have An Account? <Link to='/login'>Login</Link>
				</p>
			</form>
		</div>
	);
};

export default Login;
