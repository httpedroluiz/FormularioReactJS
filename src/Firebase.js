import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsvNnbLHivk2JGyFMgDlDOdjJMg6OvHDg",
    authDomain: "projetoead-9c32d.firebaseapp.com",
    projectId: "projetoead-9c32d",
    storageBucket: "projetoead-9c32d.appspot.com",
    messagingSenderId: "958198787267",
    appId: "1:958198787267:web:e84aeed861e519fb924676"
};
  

if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;