// Importing dependencies
import { createStore, applyMiddleware, compose, combineReducers, } from "redux";
import thunk from "redux-thunk";
// Importing states
import authReducer from "./auth";

// Combining reducers
const rootReducers = combineReducers({
    auth: authReducer
});

// <----For persisting of State---->
const saveToLocalStorage = (state) => {
    try {
        const serializedState = JSON.stringify(state)
        localStorage.setItem("auth", serializedState)
    } catch (error) {
        console.log(error)
    }
}

const loadFromLocalStorage = () => {
    try {
        const serializedState = localStorage.getItem("auth")
        if (serializedState === null) {
            return undefined
        }
        return JSON.parse(serializedState)
    } catch (error) {
        console.log(error)
        return undefined
    }
}
const persistedState = loadFromLocalStorage();

// Creating Store with persisted state and adding redux extendion tool for debugging
const store = createStore(
    rootReducers,
    persistedState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

store.subscribe(() => {
    saveToLocalStorage(
        store.getState()    // for getting all state from redux
    )
});

export default store;