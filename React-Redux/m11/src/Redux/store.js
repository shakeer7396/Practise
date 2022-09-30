import { legacy_createStore,combineReducers,compose,applyMiddleware } from "redux";
import {reducer as AppReducer} from './AppReducer/reducer';
import thunk from 'redux-thunk'

const rootReducer=combineReducers({AppReducer});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store=legacy_createStore(rootReducer,composeEnhancers(applyMiddleware(thunk)))

export{store};