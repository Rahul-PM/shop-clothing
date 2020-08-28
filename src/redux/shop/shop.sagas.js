import { takeLatest, call, put, all } from 'redux-saga/effects';

import { shopActionTypes } from './shop.types';

import { firestore, convertCollectionsSnapshotToMaps } from '../../firebase/firebase.utils';

import {
    fetchCollectionsSuccess,
    fetchCollectionsFailure
} from './shop.actions';

export function* fetchCollectionsStartAsyc() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapShot = yield collectionRef.get();
        const collectionsMap = yield call(convertCollectionsSnapshotToMaps, snapShot);
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

export function* fetchCollectionsStart() {
    yield takeLatest(
        shopActionTypes.FETCH_COLLECTIONS_START,
        fetchCollectionsStartAsyc
    )
}

export function* shopSaga() {
    yield all([call(fetchCollectionsStart)]);
}