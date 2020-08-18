import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDLIgnMYre0hNdDFFnbEhXWWkm3DZXMptA",
    authDomain: "shop-db-c1a9c.firebaseapp.com",
    databaseURL: "https://shop-db-c1a9c.firebaseio.com",
    projectId: "shop-db-c1a9c",
    storageBucket: "shop-db-c1a9c.appspot.com",
    messagingSenderId: "851758070841",
    appId: "1:851758070841:web:0f44ff400fb50eea5061e8",
    measurementId: "G-BT4QJ661HZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
