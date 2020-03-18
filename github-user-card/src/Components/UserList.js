import React from "react";
import User from "./User";

function UserList(props) {
    console.log("UserList component props:", props);
    return (
        <div className="User-list">
            <User
                image={props.user.avatar_url}
                header={props.user.name}
                subheader={props.user.login}
                url={props.user.html_url}
            />
            {props.followers.map(follower => (
                <User
                    key={follower.id}
                    image={follower.avatar_url}
                    header={follower.login}
                    url={follower.html_url}
                />
            ))}
        </div>
    );
}

export default UserList;
