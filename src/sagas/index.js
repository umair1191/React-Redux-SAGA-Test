import watchMovieLoad from "./movieSaga";
import watchMovieInfoLoad from "./amovieSaga";
import { all, fork } from "redux-saga/effects";
function* rootSaga() {
  yield all([
    fork(watchMovieLoad),
    fork(watchMovieInfoLoad)
  ]);
}

export default rootSaga;