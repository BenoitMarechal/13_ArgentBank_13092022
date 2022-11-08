import React from 'react';

const GreenButton = (props) => {
	return <button className={props.btnClass} onClick={props.action}>{props.btnText}  </button>;
};

export default GreenButton;
