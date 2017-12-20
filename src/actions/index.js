import * as TYPES from '../types';
import {call, put} from 'redux-saga/effects';

const api = (url) => fetch(url).then(response => response.json());

export const fetchStarwarsRequest = () => ({
    type: TYPES.FETCH_STARWARS_REQUEST
});

export function* fetchPerson(action) {
    try {
        const person = yield call(api, 'https://www.swapi.co/api/people/');
        yield put({type : TYPES.FETCH_STARWARS_SUCCESS, data: person.results});// dispach
    } catch (e) {
        console.error(e);
    }
}