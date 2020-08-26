import firebase from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCWu5sw6OQ1VkUPUgeu00inZa6rcJIPxK4",
    authDomain: "fir-social-17013.firebaseapp.com",
    databaseURL: "https://fir-social-17013.firebaseio.com",
    projectId: "fir-social-17013",
    storageBucket: "fir-social-17013.appspot.com",
    messagingSenderId: "983182015958",
    appId: "1:983182015958:web:67dd8dfd00c19edaeeb877",
    measurementId: "G-4WDFESDS91"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;