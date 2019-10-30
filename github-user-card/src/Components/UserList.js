import React from 'react';
import User from './User';

function UserList(props) {
	console.log('UserList:', props);
	return (
		<div className='User-list'>
			<User image={props.user.avatar_url} header={props.user.name} subheader={props.user.login} />
			{props.followers.map((follower) => (
				<User key={follower.id} image={follower.avatar_url} header={follower.login} />
			))}
		</div>
	);
}

export default UserList;
