import firebase from "firebase/app";
import "firebase/auth";
var firebaseConfig = {
    apiKey: "AIzaSyAam8owFqK7Tbx-Yt71h7uVE2KBSJs8Kf8",
    authDomain: "vue-full-course-a1afc.firebaseapp.com",
    databaseURL: "https://vue-full-course-a1afc.firebaseio.com",
    projectId: "vue-full-course-a1afc",
    storageBucket: "vue-full-course-a1afc.appspot.com",
    messagingSenderId: "931886513216",
    appId: "1:931886513216:web:e014b201cf922ff495f3a5"
  };
firebase.initializeApp(firebaseConfig);

export default firebase