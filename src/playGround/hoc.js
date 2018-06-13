import React from 'react';
import ReactDOM from 'react-dom';

const AuthInfo = () => (
    <div>
        <p> You are authorised to view this page </p>
    </div>
)
const authorize = (WrappedComponent) => {
    return (props)=>(
        <div>
            <p>Here's the message from the authorized person</p>
            {props.isAuthorized ? (<WrappedComponent />): (<p>Please get yourself authorized first</p>)}
        </div>
    )
}
const AuthorizationPage = authorize(AuthInfo);


ReactDOM.render(<AuthorizationPage isAuthorized={false}/>,document.getElementById('container'));