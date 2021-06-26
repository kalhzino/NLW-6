import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey:"AIzaSyCx1hpRNoK3qfxQCzl1Iu-QWJ9D8h8eKqA",
  authDomain:"letmeask-nlw-de5ac.firebaseapp.com",
  databaseURL:"https://letmeask-nlw-de5ac-default-rtdb.firebaseio.com",
  projectId:"letmeask-nlw-de5ac",
  storageBucket:"letmeask-nlw-de5ac.appspot.com",
  messagingSenderId:"39188560049",
  appId:"1:39188560049:web:bfca45238666b6e1200a90"
};

firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const database = firebase.database();

 export {firebase, auth , database}