import React from 'react';
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, /*compose*/ } from 'redux';
/*import { browserHistory } from 'react-router';  DO I NEED THIS? - 
MAYBE TO ACCESS PROPS FROM PRIOS EVENTS*/
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import App from './App'

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
