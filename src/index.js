import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

const user = {
    firstName: 'Will',
    lastName: 'Cheng'
}

function greetUser(user){
    return user.firstName + ' ' + user.lastName
}

const greeting = <h1> Hello {greetUser(user)}, wubbalu00 badubdub </h1>

ReactDOM.render(
    greeting,
    document.getElementById('root')
);
