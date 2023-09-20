import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { urlSuccededFetch, urlFailed } from './urlCallActions';

const apiFetch = async (url) => {
  try {
    const gallery = axios.get(url, {
      headers: {
        Authorization: `Bearer 5aa0c39cb53066c5fbe393794b17c08f4499cba8`,
      },
    });
    console.log(gallery);
    return {
      gallery,
    };
  } catch (error) {
    console.log(error);
  }
};

function* urlRequest(url) {
  try {
    const response = yield apiFetch(url.payload);
    if (response.gallery.data) {
      yield put(urlSuccededFetch(response.gallery.data.data));
    } else {
      yield put(urlFailed(response));
      console.log(response);
    }
  } catch (e) {
    yield put(urlFailed(e.message));
  }
}

function* urlCallSaga() {
  yield takeLatest('urlRequest/apiRequest', urlRequest);
}

export default urlCallSaga;
