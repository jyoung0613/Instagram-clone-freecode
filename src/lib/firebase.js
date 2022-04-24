import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAvje3SNzRSARdpq1v-UMFGOaVMb8cqdMg",
  authDomain: "instagram-9df27.firebaseapp.com",
  projectId: "instagram-9df27",
  storageBucket: "instagram-9df27.appspot.com",
  messagingSenderId: "414159505979",
  appId: "1:414159505979:web:c05af9946e187846ee6a1e"
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
seedDatabase(firebase);

export { firebase, FieldValue };