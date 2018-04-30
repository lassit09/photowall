import React from 'react'; //import React library
import ReactDOM from 'react-dom'; //import ReactDOM library

const element = React.createElement('h1', null, 'Hello World');

ReactDOM.render(element, document.getElementById('root'));
