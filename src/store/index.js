import { applyMiddleware, createStore,combineReducers,compose} from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger'
import movieBrowserReducer from '../modules/movie-browser/movie-browser.reducers';

const rootReducer = combineReducers({
    movieBrowser : movieBrowserReducer
});

// to log details about prev state , action details etc
const loggerMiddleware = createLogger();
console.log("Creating Store")
const store = createStore(
    //reducer
    rootReducer,
    //preloadState
    undefined,
    compose(
        applyMiddleware(
            //Thunk allows functions to be returned from action creators so we can do actions like dispatch multiple actions
            //in a single action creator fro async
            thunkMiddleware,
            loggerMiddleware
        )
    )
);

console.log("Store created");
export default store;