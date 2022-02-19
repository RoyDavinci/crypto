import React from "react";
import "./icon.css";

const Icon = ({ Icon, title }) => {
	return (
		<div className='iconDetails'>
			<span>{title}</span>
			<i className={Icon}></i>
		</div>
	);
};

export default Icon;
