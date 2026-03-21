
function UserGreeting(props){

    if(props.isLoggedIn){       // we could also use a ternary operator
        return <h2 className="welcome-message">Welcome {props.username}</h2>
    }
    else{           // you can also just return after the if without the else because the first return will exit the code
        return <h2 className="login-prompt">Please log in to continue</h2>
    }
}

export default UserGreeting
