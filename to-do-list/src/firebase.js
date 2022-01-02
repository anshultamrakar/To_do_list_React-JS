import firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC2Mfme1NQJCczaA-yE5VsvhPRHZm_zPb8",
  authDomain: "to---do-app.firebaseapp.com",
  projectId: "to---do-app",
  storageBucket: "to---do-app.appspot.com",
  messagingSenderId: "104574828710",
  appId: "1:104574828710:web:7b0446c3f4c09088657467",
  measurementId: "G-3W9GWK3DC1"
};

firebase.InitializeApp(firebaseConfig);
export const db = firebase.firestore();


export default firebase ;