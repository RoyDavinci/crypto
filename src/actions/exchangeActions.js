import Axios from "axios";

import {
	EXCHANGE_REQUEST_FAIL,
	EXCHANGE_REQUEST_REQUEST,
	EXCHANGE_REQUEST_SUCCESS,
	BITCOIN_REQUEST_FAIL,
	BITCOIN_REQUEST_REQUEST,
	BITCOIN_REQUEST_SUCCESS,
} from "../constants/exchangeConstants";

export const getValue = (currency) => async (dispatch) => {
	dispatch({
		type: EXCHANGE_REQUEST_REQUEST,
	});
	try {
		let { data } = await Axios.get(
			`https://api.coingecko.com/api/v3/simple/price?ids=${currency}&vs_currencies=usd`
		);
		dispatch({ type: EXCHANGE_REQUEST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: EXCHANGE_REQUEST_FAIL, payload: error.message });
	}
};

export const getBitcoinValue = () => async (dispatch) => {
	dispatch({
		type: BITCOIN_REQUEST_REQUEST,
	});
	try {
		let { data } = await Axios.get(
			`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd`
		);
		dispatch({ type: BITCOIN_REQUEST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: BITCOIN_REQUEST_FAIL, payload: error.message });
	}
};
