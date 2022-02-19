import React from "react";
import "./flextoken.css";

const FlexToken = ({ image, title }) => {
	return (
		<div className='flexToken-container'>
			<div className='flexToken-content'>
				<img src={image} alt='' />
				<p>{title}</p>
			</div>
		</div>
	);
};

export default FlexToken;
