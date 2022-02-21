import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAb24CVT0t5lSndY8T7NdGfEdTU1317doY',
  authDomain: 'sites-aadbc.firebaseapp.com',
  projectId: 'sites-aadbc',
  storageBucket: 'sites-aadbc.appspot.com',
  messagingSenderId: '543953959265',
  appId: '1:543953959265:web:2cf44fd6e40d272f5b2d20',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timestamp };
