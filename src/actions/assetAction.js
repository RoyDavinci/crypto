import Axios from "axios";
import {
	ASSETS_REQUEST_FAIL,
	ASSETS_REQUEST_REQUEST,
	ASSETS_REQUEST_SUCCESS,
	SINGLE_ASSET_SUCCESS,
	SINGLE_ASSETS_REQUEST,
	SINGLE_ASSETS_FAIL,
} from "../constants/assetsConstants";

export const getAllAssets = () => async (dispatch) => {
	dispatch({
		type: ASSETS_REQUEST_REQUEST,
	});
	try {
		let { data } = await Axios.get("https://data.messari.io/api/v2/assets");
		dispatch({ type: ASSETS_REQUEST_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: ASSETS_REQUEST_FAIL, payload: error.message });
	}
};

export const getSingleAsset = (item) => async (dispatch) => {
	dispatch({ type: SINGLE_ASSETS_REQUEST });
	try {
		let { data } = await Axios.get(
			`https://data.messari.io/api/v1/assets/${item}`
		);
		dispatch({ type: SINGLE_ASSET_SUCCESS, payload: data });
	} catch (error) {
		dispatch({ type: SINGLE_ASSETS_FAIL, payload: error.message });
	}
};
