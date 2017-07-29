import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './reducers'
const store = createStore(reducer);


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

// git add .
// git commit -m "Add existing file"
// git remote add origin https://github.com/chaimsalzer/diamonds.git
// git push -u origin master
