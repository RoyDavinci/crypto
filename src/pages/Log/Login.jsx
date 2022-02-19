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

		if (
			loginInfo?.email.email === values.email &&
			loginInfo?.email.password === values.password
		) {
			navigate("/");
		} else {
			setShow(!show);
		}
	};

	return (
		<div className='loginContainer'>
			<form action='' onSubmit={handleSubmit}>
				{show ? <small>email or password incorrect</small> : ""}
				<div className='form-group'>
					<label htmlFor='email'>Enter Email</label>
					<input
						type='email'
						id='email'
						name='email'
						value={values.email}
						onChange={handleChange}
					/>
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
