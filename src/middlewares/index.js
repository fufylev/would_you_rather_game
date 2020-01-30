import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import { createLogger } from 'redux-logger';

let middleware = [thunk];

if (process.env.NODE_ENV !== 'production') {
    middleware = [...middleware, createLogger()];
}

export  default applyMiddleware(...middleware);