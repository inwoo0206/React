/*
import { combineReducers } from "redux";
import counter from "./counter";

const rootReducer = combineReducers({
  counter,
});

export default rootReducer;
*/

// 18.3.1.4 웹 요청 비동기 작업 처리하기
import { combineReducers } from "redux";
import counter from "./counter";
import sample from "./sample";

const rootReducer = combineReducers({
  counter,
  sample,
});

export default rootReducer;
