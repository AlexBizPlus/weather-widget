import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import './scss/index.scss';

// eslint-disable-next-line no-console
console.log(`main.js`);

ReactDOM.render(React.createElement(App), document.querySelector('#root'));
