import { initializeApp, getApp, getApps } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyCdZx9Um_BZyrxKK5x9uADvNOKb7uO1VXg',
  authDomain: 'cinemana-d2058.firebaseapp.com',
  projectId: 'cinemana-d2058',
  storageBucket: 'cinemana-d2058.appspot.com',
  messagingSenderId: '114977099090',
  appId: '1:114977099090:web:753217c3a208aa771cfe8b',
}

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
