import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			user      : { data: '' },
			followers : [],
		};
	}

	componentDidMount() {
		axios.get('https://api.github.com/users/bradzickafoose').then((response) => {
			console.log(response);
			this.setState({
				user : response,
			});
		});
		axios
			.get('https://api.github.com/users/bradzickafoose/followers')
			.then((response) => this.setState({ followers: response.data }))
			.catch((error) => console.log(error));
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<h1>Git Hub Users</h1>
				</header>
				{this.state.followers.map((follower) => (
					<div key={follower.id}>
						<a href={follower.html_url}>
							<img src={follower.avatar_url} alt={follower.login} />
							<h3>{follower.login}</h3>
						</a>
					</div>
				))}
			</div>
		);
	}
}

export default App;
