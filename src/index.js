import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux'

const initialState = {
    urls: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'UPDATEurls':
            return {...state,
                urls: [...state.urls, action.url]
            }
        case 'CLEARURLSTORE':
            return {...state,
                urls: []
            }
        default:
            return state
    }
}


const store = createStore(reducer)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root'));
