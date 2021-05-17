import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAE60Mo1AZG9VBuCxhcHMTQiKXxhAnLGKc",
    authDomain: "crwn-db-bc047.firebaseapp.com",
    projectId: "crwn-db-bc047",
    storageBucket: "crwn-db-bc047.appspot.com",
    messagingSenderId: "986326400383",
    appId: "1:986326400383:web:c16ef1de1f2cbe3cc86e4a",
    measurementId: "G-QTH39JSZQZ"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            });
        } catch (error) {
            console.log('error creating user', error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;