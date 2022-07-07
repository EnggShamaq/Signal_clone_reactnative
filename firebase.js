import   firebase from 'firebase/app';
import  'firebase/auth';
import  "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDD5KEABb4iyue_de7iTD4zCqXUL7LQ-fw",
    authDomain: "signal-cloneapp.firebaseapp.com",
    projectId: "signal-cloneapp",
    storageBucket: "signal-cloneapp.appspot.com",
    messagingSenderId: "628008148346",
    appId: "1:628008148346:web:44122841269331f56e4ac3"
  };

  
  
let app; 
let db;
let auth; 

if(!firebase.apps.length){
  app=firebase.initializeApp(firebaseConfig);
  db= app.firestore()
  auth= app.auth()
  }






//   if (firebase?.apps?.length === 0){
//     app = firebase.initializeApp(firebaseConfig);
//   } 
//   else {
//     app = firebase.app();
//   }
//  const db = app.firestore();
//  const auth = firebase.auth();

//initializeApp(firebaseConfig);
export {  db , auth };


  // const app = initializeApp(firebaseConfig)
  // export const auth = getAuth(app);
  // const db = getFirestore(app);