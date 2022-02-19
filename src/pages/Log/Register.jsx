import React, { useState, useEffect } from "react";
import "./register.css";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../actions/userAction";

const Register = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const user = useSelector((state) => state.userInfo);
	const [values, setValues] = useState({ name: "", email: "", password: "" });

	const { userInfo } = user;

	const handleChange = (e) => {
		const { name, value } = e.target;

		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(
			register({
				name: values.name,
				email: values.email,
				password: values.password,
			})
		);
	};

	useEffect(() => {
		if (Object.keys(userInfo).length > 0 || typeof userInfo !== undefined) {
			navigate("/");
		} else {
			navigate("/register");
		}
	}, [userInfo, navigate]);

	return (
		<div className='registerContainer'>
			<form action='' onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='name'>Enter Name</label>
					<input
						type='text'
						id='name'
						name='name'
						value={values.name}
						onChange={handleChange}
					/>
				</div>
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

export default Register;
