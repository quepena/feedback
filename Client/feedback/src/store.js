import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import addFeedbackReducer from './reducers/index.js'

const middleware = [thunk];

const store = createStore(addFeedbackReducer, composeWithDevTools(applyMiddleware(...middleware)));

export default store;