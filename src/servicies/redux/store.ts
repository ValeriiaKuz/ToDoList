import { applyMiddleware, compose, createStore } from "redux";
import { rootReducer } from "./reducers/reducers";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { watchGetProjectsAsync } from "../saga/saga";

const composeEnhancers =
  typeof window === "object" &&
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, sagaMiddleware)),
);
sagaMiddleware.run(watchGetProjectsAsync);
