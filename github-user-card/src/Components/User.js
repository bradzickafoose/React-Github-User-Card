import React from "react";

function User(props) {
    console.log("User component props:", props);
    return (
        <div className="User-card" key="props.key">
            <a href={props.url}>
                <img src={props.image} alt={props.header} />
                <h1>{props.header}</h1>
                <p>{props.subheader}</p>
            </a>
        </div>
    );
}

export default User;
