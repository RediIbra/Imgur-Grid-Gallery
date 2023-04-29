import { all } from "redux-saga/effects";
import urlCallSaga from "./apiCalls/urlCallSaga";

export default function* rootSaga() {
  yield all([urlCallSaga()]);
}
