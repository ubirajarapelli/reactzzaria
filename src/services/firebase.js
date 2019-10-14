import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyB7eqyrESlZ5ZHPAw3aIpGWeJDWGNo1KS8',
  authDomain: 'reactzzaria-b2wd.firebaseapp.com',
  databaseURL: 'https://reactzzaria-b2wd.firebaseio.com',
  projectId: 'reactzzaria-b2wd',
  storageBucket: '',
  messagingSenderId: '295808020645',
  appId: '1:295808020645:web:0de8b39185663936881d4c'
}

firebase.initializeApp(firebaseConfig)

export default firebase
