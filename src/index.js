// Import react and reactDOM
import React from 'react';
import ReactDOM from 'react-dom';  

// Create a react component
const App = () => {
// const App = function() {
    return <div>Hi There!</div>;
}

// Take the react component and show it on screen
ReactDOM.render(
    <App />,
    document.querySelector('#root')
    );