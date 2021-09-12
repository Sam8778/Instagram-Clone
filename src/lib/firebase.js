/* eslint-disable prettier/prettier */
import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here i import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyAKvTas6vuHXhSqiQtpTIfPlVDioxHb_nE',
  authDomain: 'instagram-ff9b8.firebaseapp.com',
  projectId: 'instagram-ff9b8',
  storageBucket: 'instagram-ff9b8.appspot.com',
  messagingSenderId: '2206219914',
  appId: '1:2206219914:web:5c5d0fa8a46432150df773',
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;
// here i call the seed file only once(ONLY ONCE !!! )
// seedDatabase(firebase);
export { firebase, FieldValue };
