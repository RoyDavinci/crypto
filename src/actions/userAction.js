import {
	USER_SIGNIN_REQUEST,
	USER_SIGNIN_SUCCESS,
	USER_SIGNIN_FAIL,
	USER_REGISTER_REQUEST,
	USER_REGISTER_SUCCESS,
	USER_REGISTER_FAIL,
	USER_SIGNOUT,
} from "../constants/userConstants";

export const signIn = (email, password) => async (dispatch) => {
	dispatch({ type: USER_SIGNIN_REQUEST, payload: { email, password } });
	try {
		const data = {
			email,
			password,
		};
		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });
		localStorage.setItem("loginInfo", JSON.stringify(data));
		localStorage.setItem("userInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_SIGNIN_FAIL,
			payload: error.message,
		});
	}
};

export const register = (email, password, name) => async (dispatch) => {
	dispatch({ type: USER_REGISTER_REQUEST, payload: { email, password, name } });
	try {
		const data = { email, password, name };
		dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
		dispatch({ type: USER_SIGNIN_SUCCESS, payload: data });

		localStorage.setItem("userInfo", JSON.stringify(data));
		localStorage.setItem("loginInfo", JSON.stringify(data));
	} catch (error) {
		dispatch({
			type: USER_REGISTER_FAIL,
			payload: error.message,
		});
	}
};

export const signOut = () => (dispatch) => {
	localStorage.removeItem("userInfo");
	localStorage.removeItem("loginInfo");
	dispatch({ type: USER_SIGNOUT });
};
