import React from 'react';
// import { Card } from 'semantic-ui-react';
// import 'semantic-ui-css/semantic.min.css';

function User(props) {
	console.log('User:', props);
	return (
		<div className='User-card' key='props.key'>
			<img src={props.image} alt={props.header} />
			<h1>{props.header}</h1>
			<p>{props.subheader}</p>
		</div>

		// <Card image={props.image} header={props.header} />
	);
}

export default User;
