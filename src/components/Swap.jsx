import React, { useState, useEffect, useCallback } from "react";
import "./swap.css";
import { useSelector, useDispatch } from "react-redux";
import { getAllAssets } from "../actions/assetAction";
import { getValue, getBitcoinValue } from "../actions/exchangeActions";

const Swap = () => {
	const [sentToken, setSentToken] = useState("");
	const [sent, setSent] = useState(0);
	const [dollar, setDollar] = useState(0);
	const [recieve, setRecieve] = useState(0);
	const [tokens, setTokens] = useState([]);
	const [initialBitcoin, setInitialBitcoin] = useState({});
	const [show, setShow] = useState(false);
	const dispatch = useDispatch();

	const asset = useSelector((state) => state.assets);
	const value = useSelector((state) => state.exchange);
	const bitcoinValue = useSelector((state) => state.bitcoin);
	const { assets } = asset;
	const { currency } = value;

	const { bitcoin } = bitcoinValue;
	let dollarValue = typeof currency === "object" ? Object.values(currency) : 1;

	useEffect(() => {
		setInitialBitcoin(bitcoin?.bitcoin.usd);
	}, [bitcoin]);

	useEffect(() => {
		dispatch(getBitcoinValue());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getAllAssets());
	}, [dispatch]);

	useEffect(() => {
		dispatch(getValue(sentToken));
	}, [dispatch, sentToken]);
	const handleClick = useCallback(() => {
		if (!show) {
			setRecieve(dollarValue[0]?.usd * Number(sent));
		} else {
			if (sent === "") {
				setRecieve(Number(dollar) / dollarValue[0]?.usd / 1);
			} else {
				setRecieve(Number(dollar) / dollarValue[0]?.usd / sent);
			}
		}
	}, [sent, dollarValue, show, dollar]);
	useEffect(() => {
		handleClick();
	}, [handleClick]);

	useEffect(() => {
		setTokens(assets?.data);
	}, [assets?.data]);
	return (
		<>
			<main className='swapComponent-container'>
				<p className='exchange'>Exchange</p>
				<div className='inputContainer'>
					{!show ? (
						<div className='firstInput'>
							<p>You Send</p>
							<div className='swapComponent-selectContainer'>
								<input
									type='number'
									value={sent}
									name='sent'
									id=''
									placeholder='Enter Amount'
									onChange={(e) => {
										setSent(e.target.value);
									}}
									onKeyDown={handleClick}
								/>
								<div className='swapComponent-selectItems'>
									<select
										name=''
										id=''
										onChange={(e) => setSentToken(e.target.value)}
									>
										Select Token
										{tokens?.map((token) => {
											return (
												<option key={token.id} value={token.slug}>
													{token.symbol}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
					) : (
						<div className='secondInput'>
							<p>Enter Dollar Amount</p>
							<div className='swapComponent-selectContainer'>
								<input
									type='number'
									value={dollar}
									name='recieve'
									id=''
									placeholder='Enter Amount'
									className={`${!show ? "inputHide" : "inputShow"}`}
									onChange={(e) => {
										setDollar(e.target.value);
									}}
									onKeyDown={handleClick}
								/>
								<div className='swapComponent-selectItems'>
									<h1>Dollar Value $$$</h1>
								</div>
							</div>
						</div>
					)}

					<div className='seperator'>
						<span className='line'></span>
						<i
							className='fa-solid fa-handshake'
							onClick={() => setShow(!show)}
						></i>
						<span className='line'></span>
					</div>
					{show ? (
						<div className='firstInput'>
							<p>You Send</p>
							<div className='swapComponent-selectContainer'>
								<input
									type='number'
									value={sent}
									name='sent'
									id=''
									placeholder='Enter Amount'
									onChange={(e) => {
										setSent(e.target.value);
									}}
									onKeyDown={handleClick}
								/>
								<div className='swapComponent-selectItems'>
									<select
										name=''
										id=''
										onChange={(e) => setSentToken(e.target.value)}
									>
										Select Token
										{tokens?.map((token) => {
											return (
												<option key={token.id} value={token.slug}>
													{token.symbol}
												</option>
											);
										})}
									</select>
								</div>
							</div>
						</div>
					) : (
						<div className='secondInput'>
							<p>Enter Dollar Amount</p>
							<div className='swapComponent-selectContainer'>
								<input
									type='number'
									value={dollar}
									name='recieve'
									id=''
									className={`${!show ? "inputHide" : "inputShow"}`}
									placeholder='Enter Amount'
									onChange={(e) => {
										setDollar(e.target.value);
									}}
									onKeyDown={handleClick}
								/>
								<div className='swapComponent-selectItems'>
									<h1>Dollar Value $$$</h1>
								</div>
							</div>
						</div>
					)}
				</div>
				<div className='portfolio'>
					<h5>Available Portfolio</h5>
					<div className='portfolioContainer'>
						<div className='name'>
							<p>
								<strong>{sentToken === "" ? "Bitcoin" : sentToken}</strong> ={" "}
								{sent === "" ? "1" : sent}
							</p>
						</div>
						<div className='details'>
							<h4>
								Dollar Value - $
								{isNaN(recieve) ? initialBitcoin : recieve.toFixed(3)}
							</h4>
						</div>
					</div>
				</div>
			</main>
		</>
	);
};

export default Swap;
