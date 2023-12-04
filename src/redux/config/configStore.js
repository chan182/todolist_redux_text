import { combineReducers, createStore } from "redux";
import todos from "../modules/todos";

// 1. rootReducer를 만든다. -> reducer들을 합친다.

const rootReducer = combineReducers({
    todos,
});

// 2. 이것을 이용해서 store를 만든다.

const store = createStore(rootReducer);

// 3.  export해서 다른 파일에서 import 할 수 있게 한다.

export default store;
