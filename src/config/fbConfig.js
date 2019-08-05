import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'


var firebaseConfig = {
    apiKey: "AIzaSyA-I9a1da-IShpVr9ds9vnW4sO_fxz-HHE",
    authDomain: "viarmoly-plan.firebaseapp.com",
    databaseURL: "https://viarmoly-plan.firebaseio.com",
    projectId: "viarmoly-plan",
    storageBucket: "",
    messagingSenderId: "577533544353",
    appId: "1:577533544353:web:4f27ee9a43930b56"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({timestampsInSnapshots: true});

export default firebase;
