import * as firebase from 'firebase'

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyAvE8I7RVL7gXa0p6d6Unqn4dJGoVMB-wE',
  authDomain: 'get2reach.firebaseapp.com',
  databaseURL: 'https://get2reach.firebaseio.com',
  projectId: 'get2reach',
  storageBucket: 'get2reach.appspot.com',
  messagingSenderId: '122122060316',
}
const app = firebase.initializeApp(config)

export default app
