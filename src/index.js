import React from 'react';
import ReactDOM from 'react-dom';

// Create new component
// Should produce some HTML
const App = () => {
    return <div>Hi!</div>
};

// Take component's generated HTML and put it into the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
