import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// Need to update below config
const firebaseConfig = {
apiKey: "AIzaSyBeHp1BZipB1oFIn7M4pdURzb_Z3Ukz-Pg",
  authDomain: "arshop-c1d82.firebaseapp.com",
  projectId: "arshop-c1d82",
  storageBucket: "arshop-c1d82.appspot.com",
  messagingSenderId: "62018360172",
  appId: "1:62018360172:web:b5d5bb393f49420d57d949"
};

try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err);
  }
}

const auth = firebase.auth();
export { auth, firebase };