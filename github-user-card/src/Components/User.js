import React from 'react';

function User(props) {
	console.log('User:', props);
	return (
		<div className='user' key='props.key'>
			<img src={props.image} alt={props.header} />
			<h1>{props.header}</h1>
			<p>{props.subheader}</p>
			<p>{props.following}</p>
		</div>
	);
}

export default User;
