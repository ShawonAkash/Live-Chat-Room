import 'firebase/firestore'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBAC7q9DwuMVx4iA9j5KB-oqw6WPVS5Nss",
  authDomain: "live-chat-7f3c2.firebaseapp.com",
  projectId: "live-chat-7f3c2",
  storageBucket: "live-chat-7f3c2.appspot.com",
  messagingSenderId: "270707621316",
  appId: "1:270707621316:web:ff707ffa1efefc7ac57891"
}

//init firebase
firebase.initializeApp(firebaseConfig)

const projectAuth = firebase.auth()
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, timestamp, projectAuth }
