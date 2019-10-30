import React from 'react';
import User from './User';

function UserList(props) {
	console.log('UserList:', props);
	return (
		<div className='User-list'>
			<User image={props.user.avatar_url} header={props.user.name} following={props.user.following} />
			{props.followers.map((follower) => (
				<User
					key={follower.id}
					image={follower.avatar_url}
					header={follower.name}
					subheader={follower.login}
					following={follower.following}
				/>
			))}
		</div>
	);
}

export default UserList;
