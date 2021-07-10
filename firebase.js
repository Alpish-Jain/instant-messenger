import firebase from "firebase";
import  'firebase/firestore';

if(!firebase.apps.length){
var firebaseApp=firebase.initializeApp({
  apiKey: "AIzaSyAe9keihy81R1aTpNEaEFNYMq42hg1vN7M",
  authDomain: "instant-messenger-1.firebaseapp.com",
  projectId: "instant-messenger-1",
  storageBucket: "instant-messenger-1.appspot.com",
  messagingSenderId: "1033315099199",
  appId: "1:1033315099199:web:7680aa795abe077add0e8a"
});
}
else{
  var firebaseApp=firebase.app()
}

const db=firebaseApp.firestore();

export {db};