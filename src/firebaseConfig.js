import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCAnd43OVPW-5ySZEvFv95J8HLBGTiuqlk',
  authDomain: 'finance-app-ajit49.firebaseapp.com',
  projectId: 'finance-app-ajit49',
  storageBucket: 'finance-app-ajit49.appspot.com',
  messagingSenderId: '637956750544',
  appId: '1:637956750544:web:7b575bfa5ed953e6d132d5',
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);