import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import {LoginReducer} from './reducers/LoginReducer';
import { ProductsReducer } from './reducers/ProductsReducer';

const initialState = {};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    combineReducers({
        login: LoginReducer,
        product: ProductsReducer,
    }),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;