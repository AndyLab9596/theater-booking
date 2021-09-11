import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";

// import reducer
import { UserReducer } from "./reducers/UserReducer";
import { MovieReducer } from "./reducers/MovieReducer";
import { TheaterReducer } from "./reducers/TheaterReducer";
import { BookingReducer } from "./reducers/BookingReducer";

const rootReducer = combineReducers({
    UserReducer,
    MovieReducer,
    TheaterReducer,
    BookingReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export default store;