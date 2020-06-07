import { createStore, applyMiddleware, compose, combineReducers, } from "redux";
import thunk from "redux-thunk";
import authReducer from "./auth";

const rootReducers = combineReducers({
    auth: authReducer
});

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
        store.getState()
    )
});

export default store;