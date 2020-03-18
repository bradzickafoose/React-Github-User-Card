import React from "react";
import axios from "axios";
import UserList from "./Components/UserList";
import "./App.css";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            user: {},
            followers: []
        };
    }

    componentDidMount() {
        axios
            .get("https://api.github.com/users/bradzickafoose")
            .then(response => {
                console.log("Github user response:", response);
                this.setState({
                    user: response.data
                });
            });
        axios
            .get("https://api.github.com/users/bradzickafoose/followers")
            .then(response => {
                console.log("Github follower response:", response);
                this.setState({
                    followers: response.data
                });
            })
            .catch(error => console.log(error));
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1>Git Hub Users</h1>
                </header>
                <UserList
                    user={this.state.user}
                    followers={this.state.followers}
                />
            </div>
        );
    }
}

export default App;
