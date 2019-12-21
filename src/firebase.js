import firebase from '@firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'
// Initialize Firebase
var config = {
  apiKey: 'AIzaSyCa2VuBK_54uSIygqegmguYVJiaCk9gliU',
  authDomain: 'kamagera-aa372.firebaseapp.com',
  databaseURL: 'https://kamagera-aa372.firebaseio.com/',
  projectId: 'kamagera-aa372',
  storageBucket: 'gs://random-4e346.appspot.com    ',

}

const fb = firebase.initializeApp(config)

const db = firebase.firestore()

export { fb, db }
