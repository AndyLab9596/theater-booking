import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import reducer
import { UserReducer } from "./reducers/UserReducer";
import { MovieReducer } from "./reducers/MovieReducer";

const rootReducer = combineReducers({
    UserReducer,
    MovieReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;