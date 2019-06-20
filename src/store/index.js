import { createStore, compose, applyMiddleware } from "redux";
import reducer from "./reducers";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    compose(
        applyMiddleware(sagaMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);

sagaMiddleware.run(rootSaga);

export default store;
