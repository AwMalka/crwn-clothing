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

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;