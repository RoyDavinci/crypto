import React, { useState, useEffect } from "react";
import "./token.css";
import CryptoImage from "../design/download.png";
import { useSelector, useDispatch } from "react-redux";
import { getAllAssets } from "../actions/assetAction";

const Token = () => {
	const [search, setSearch] = useState("");
	const [tokens, setTokens] = useState([]);
	const dispatch = useDispatch();

	const asset = useSelector((state) => state.assets);
	const { loading, error, assets } = asset;

	console.log(loading, error, tokens);
	useEffect(() => {
		dispatch(getAllAssets());
	}, [dispatch]);

	useEffect(() => {
		setTokens(assets?.data);
	}, [assets?.data]);

	return (
		<main className='tokenContainer'>
			<section className='section-center'>
				<header>
					<div className='select'>
						<p>Select A Token</p>
						<i className='fa-solid fa-xmark'></i>
					</div>
				</header>
				<div className='inputContainer'>
					<input
						type='text'
						palceholder='search name or paste address'
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
				</div>
				<div className='tokenContainer-details'>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
					<div className='flexToken-content'>
						<img src={CryptoImage} alt='' />
						<p>ETH</p>
					</div>
				</div>
				<div className='tokenContainer-singleToken'>
					{loading ? (
						<h1>loading...</h1>
					) : error ? (
						<h1>{error}</h1>
					) : (
						tokens?.map((token) => {
							return (
								<div
									className='tokenContainer-singleTokenDetails'
									key={token.id}
								>
									<div className='img'>
										<img src={CryptoImage} alt='' />
									</div>
									<div className='content'>
										<h5>{token.symbol}</h5>
										<p>{token.slug}</p>
									</div>
								</div>
							);
						})
					)}
				</div>
			</section>
			<div className='tokenContainer-manageList'>
				<i className='fa-solid fa-pen'></i>
				<p>manage token lists</p>
			</div>
		</main>
	);
};

export default Token;
