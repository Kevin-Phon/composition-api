import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDHFUp3p3znNCHuJHgAEewFCccG2c4OiJE",
    authDomain: "vue-blog-system-b0eb6.firebaseapp.com",
    projectId: "vue-blog-system-b0eb6",
    storageBucket: "vue-blog-system-b0eb6.appspot.com",
    messagingSenderId: "680773899876",
    appId: "1:680773899876:web:58760a322b137c21aab171"
};

//init firebase
firebase.initializeApp(firebaseConfig)

//database setup
let db = firebase.firestore();

export {db}