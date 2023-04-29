import axios from "axios";
import { put, takeLatest } from "redux-saga/effects";
import { urlSucceded, urlFailed } from "./urlCallActions";

const logInFunction = async ({ payload }) => {
  const response = await axios.post(
    "http://192.168.10.94:8080/enjoyAlbania/auth/login"
  );
  console.log(response);
};

function* urlCall({ payload }) {
  try {
    const response = yield logInFunction(payload);
    if (response.statusCode) {
      yield put(urlSucceded(response.user));
    } else {
      yield put(urlFailed(response));
      console.log(response);
    }
  } catch (e) {
    yield put(urlFailed(e.message));
  }
}

function* loginSaga() {
  yield takeLatest("urlCall/urlCallRequest", urlCall);
}

export default loginSaga;
