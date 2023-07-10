import { persistReducer } from "redux-persist";
import { AuthReducer } from "./reducers/AuthReducer";
import { createStore, combineReducers, Store } from "redux";
import { PersistConfig, Persistor } from "redux-persist/es/types";
// local storage 사용
import storage from "redux-persist/lib/storage";

const persistConfig: PersistConfig<any> = {
  key: "root",
  //local storage에 저장
  storage: storage,
};

const allReducers = combineReducers({
  Auth: AuthReducer,
});

const store: Store & { __persistor: Persistor } = createStore(
  persistReducer(persistConfig, allReducers),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
