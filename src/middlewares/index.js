import thunk from "redux-thunk";
import {applyMiddleware} from "redux";
import { createLogger } from 'redux-logger';

export  default applyMiddleware(
    thunk,
    createLogger(),
)