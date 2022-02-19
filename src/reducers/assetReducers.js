import {
	ASSETS_REQUEST_FAIL,
	ASSETS_REQUEST_REQUEST,
	ASSETS_REQUEST_SUCCESS,
	SINGLE_ASSET_SUCCESS,
	SINGLE_ASSETS_REQUEST,
	SINGLE_ASSETS_FAIL,
} from "../constants/assetsConstants";

const assetReducer = (state = { loading: true, assets: [] }, action) => {
	switch (action.type) {
		case ASSETS_REQUEST_REQUEST:
			return { loading: true };
		case ASSETS_REQUEST_SUCCESS:
			return { loading: false, assets: action.payload };
		case ASSETS_REQUEST_FAIL:
			return { loading: false, error: action.payload };
		case SINGLE_ASSETS_REQUEST:
			return { loading: true };
		case SINGLE_ASSET_SUCCESS:
			return { loading: false, assets: action.payload };
		case SINGLE_ASSETS_FAIL:
			return { loading: false, error: action.payload };
		default:
			return state;
	}
};

export { assetReducer };
