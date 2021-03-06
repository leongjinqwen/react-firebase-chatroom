import React from 'react'
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import {Navbar,NavTitle} from './styles/components'
import logo from './firebase-logo.png'

// only initialize firebase if not exist
if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID
  });
}

const auth = firebase.auth()
const firestore = firebase.firestore()

const containerStyle = {
  height:'100vh',
  overflow:'hidden', 
  background:"#2b2b2b"
}
const navbar = {
  display:'flex',
  justifyContent:'space-between',
  alignItems: 'center',
}
const sectionStyle = {
  height:"90vh",
  position: 'relative', 
  textAlign:'center',
}

function App() {
  const [ user ] = useAuthState(auth) // return user object via hook
  
  return (
    <div style={containerStyle}>
      <Navbar dark style={navbar}>
        <NavTitle>
          <img src={logo} alt="logo" />
          Chatroom
        </NavTitle>
        <SignOut auth={auth}/>
      </Navbar>
      <section style={sectionStyle}>
        { user ? <ChatRoom auth={auth} firestore={firestore} /> : <SignIn auth={auth} firebase={firebase}/> }
      </section>
    </div>
  );
}

export default App;
