import React, { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./home.css";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../design/Screenshot 2022-02-17 104203.png";
import Swap from "../../components/Swap";
import Icon from "../../components/Icon";
import Network from "../../components/Network";
import { signOut } from "../../actions/userAction";

const Home = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [show, setShow] = useState(true);
	const [network, setNetwork] = useState(true);
	const [check, setCheck] = useState({ activeId: 0 });
	const ref = useRef([]);

	const arr = ["Swap", "Pool", "Vote", "Charts"];

	const handleSignOut = () => {
		dispatch(signOut());
		navigate("/register");
	};

	const handleClick = (id) => {
		setCheck({ activeId: id });
	};

	return (
		<div className='homeContainer'>
			<header>
				<div className='homeContainer-logo'>
					<img src={Logo} alt='' />
				</div>
				<div className='homeContainer-swap'>
					<ul>
						{arr.map((item, index) => {
							return (
								<li
									key={index}
									className={`${check.activeId === index && "background"}`}
									ref={(element) => {
										ref.current[index] = element;
									}}
									onClick={() => handleClick(index)}
								>
									{item}
								</li>
							);
						})}
					</ul>
				</div>
				<div className='homeContainer-user'>
					<div
						className='homeContainer-crypto'
						onClick={() => setNetwork(!network)}
					>
						<p>Ethereum</p>
						<i className='fa fa-chevron-down' aria-hidden='true'></i>
					</div>
					<div className='homeContainer-wallet'>
						<button>Connect Wallet</button>
					</div>
					<div className='homeContainer-userDetails'>
						<button onClick={() => setShow(!show)}>
							<i className='fa-solid fa-ellipsis'></i>
						</button>
					</div>
				</div>
			</header>
			<section className='swapContainer'>
				<Swap tokenRecieve='ETH' tokenSend='ETH'></Swap>
			</section>
			<aside className={`${show ? "userMenu hide" : "userMenu"}`}>
				<Icon title='About' Icon='fa fa-info-circle'></Icon>
				<Icon title='Help Center' Icon='fa-solid fa-circle-question'></Icon>
				<Icon title='Request Features' Icon='fa-solid fa-mug-hot'></Icon>
				<Icon title='Discord' Icon='fa-solid fa-message-dots'></Icon>
				<Icon title='Language' Icon='fa-solid fa-globe'></Icon>
				<Icon title='Light Theme' Icon='fa-solid fa-moon'></Icon>
				<Icon title='Docs' Icon='fa-solid fa-book'></Icon>
				<Icon title='Legal and Privacy' Icon='fa-solid fa-gavel'></Icon>
				<Icon title='SignOut' onClick={handleSignOut}></Icon>
			</aside>
			<aside className={`${network ? "network hide" : "network"}`}>
				<p>Select A Network</p>
				<Network
					image=''
					title='Ethereum'
					description='ethereum'
					Icon='fa fa-info-circle'
				></Network>
				<Network
					image=''
					title='Ethereum'
					description='ethereum'
					Icon='fa fa-info-circle'
				></Network>
				<Network
					image=''
					title='Ethereum'
					description='ethereum'
					Icon='fa fa-info-circle'
				></Network>
				<Network
					image=''
					title='Ethereum'
					description='ethereum'
					Icon='fa fa-info-circle'
				></Network>
			</aside>
		</div>
	);
};

export default Home;
