import React from "react";
import "./network.css";

const Network = ({ image, title, description, Icon }) => {
	return (
		<div className='networkContainer'>
			<div className='networkContainer-details'>
				<div className='top'>
					<div className='title'>
						<img src={image} alt='' />
						<p>{title}</p>
					</div>
					<div className='green'></div>
				</div>
				<div className='bottom'>
					<p>{description}</p>
					<i className={Icon}></i>
				</div>
			</div>
		</div>
	);
};

export default Network;
