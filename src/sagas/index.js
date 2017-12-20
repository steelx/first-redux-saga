import {takeLatest} from 'redux-saga/effects';
import * as TYPES from '../types';
import {fetchPerson} from '../actions';


function* mySaga() {
    yield takeLatest(TYPES.FETCH_STARWARS_REQUEST, fetchPerson)
}

export default mySaga;