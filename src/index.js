import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import thunk from 'redux-thunk'
import reducers from './reducers'
import { getData } from './actions'
import { Provider } from 'react-redux'

import { createStore, applyMiddleware, compose } from 'redux';

const store = createStore(reducers, compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

store.dispatch(getData())

ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>, 
        document.getElementById('root'));
