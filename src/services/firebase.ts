import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {

};

firebase.initializeApp(firebaseConfig);

 const auth = firebase.auth();
 const database = firebase.database();

 export {firebase, auth , database}