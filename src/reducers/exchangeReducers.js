import {
	EXCHANGE_REQUEST_FAIL,
	EXCHANGE_REQUEST_REQUEST,
	EXCHANGE_REQUEST_SUCCESS,
	BITCOIN_REQUEST_FAIL,
	BITCOIN_REQUEST_REQUEST,
	BITCOIN_REQUEST_SUCCESS,
} from "../constants/exchangeConstants";

const exchangeReducer = (state = { loading: true, currency: [] }, action) => {
	switch (action.type) {
		case EXCHANGE_REQUEST_REQUEST:
			return { loading: true };
		case EXCHANGE_REQUEST_SUCCESS:
			return { loading: false, currency: action.payload };
		case EXCHANGE_REQUEST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

const bitcoinReducer = (state = { loading: true, bitcoin: [] }, action) => {
	switch (action.type) {
		case BITCOIN_REQUEST_REQUEST:
			return { loading: true };
		case BITCOIN_REQUEST_SUCCESS:
			return { loading: false, bitcoin: action.payload };
		case BITCOIN_REQUEST_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export { exchangeReducer, bitcoinReducer };
