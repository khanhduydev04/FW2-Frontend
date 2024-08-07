import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "@redux-saga/core";
import rootSaga from "./saga";
import reducer from "./reducers";

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer,
  middleware: (gDM) => gDM().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export default store;
