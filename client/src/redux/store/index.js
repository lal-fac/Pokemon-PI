import { applyMiddleware, legacy_createStore as createStore }  from 'redux';
import thunk from 'redux-thunk';

import reducer from '../reducer/index.js';



const store = createStore(reducer, applyMiddleware(thunk));

export default store;