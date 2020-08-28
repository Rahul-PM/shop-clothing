import { shopActionTypes } from './shop.types';
// import { firestore, convertCollectionsSnapshotToMaps } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = () => ({
    type: shopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collecionsMap => ({
    type: shopActionTypes.FETCH_COLLECTIONS_SUCCESS,
    payload: collecionsMap
});

export const fetchCollectionsFailure = errorMessage => ({
    type: shopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload: errorMessage
});

// export const fetchCollectionStartAsync = () => {
//     return dispatch => {
//         const collectionRef = firestore.collection('collections');
//         dispatch(fetchCollectionsStart);

//         collectionRef.get().then(snapShot => {
//             const collectionsMap = convertCollectionsSnapshotToMaps(snapShot);
//             dispatch(fetchCollectionsSuccess(collectionsMap));
//         })
//             .catch(error => dispatch(fetchCollectionsFailure(error)))
//     };
// };