import React from 'react';

function User(props) {
	console.log('User:', props);
	return (
		<div className='User-card' key='props.key'>
			<img src={props.image} alt={props.header} />
			<h1>{props.header}</h1>
			<p>{props.subheader}</p>
		</div>
	);
}

export default User;
