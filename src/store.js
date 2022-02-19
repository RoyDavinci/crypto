import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { assetReducer } from "./reducers/assetReducers";
import { exchangeReducer, bitcoinReducer } from "./reducers/exchangeReducers";
import { userCreateReducer, userSigninReducer } from "./reducers/userReducer";

const initialState = {
	assets: {},
	exchange: {},
	bitcoin: {},
	userInfo: {
		userInfo: localStorage.getItem("userInfo")
			? JSON.parse(localStorage.getItem("userInfo"))
			: null,
	},
	loginInfo: {
		loginInfo: localStorage.getItem("loginInfo")
			? JSON.parse(localStorage.getItem("loginInfo"))
			: null,
	},
};

const reducer = combineReducers({
	assets: assetReducer,
	exchange: exchangeReducer,
	bitcoin: bitcoinReducer,
	userInfo: userCreateReducer,
	loginInfo: userSigninReducer,
});

const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
	reducer,
	initialState,
	composerEnhancer(applyMiddleware(thunk))
);

export default store;
