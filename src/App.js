import React from 'react'
import './App.css';
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import ChatRoom from './components/ChatRoom';
import SignIn from './components/SignIn';
import SignOut from './components/SignOut';

import {Navbar,NavTitle} from './styles/components'

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

const navbar = {
  display:'flex',
  justifyContent:'space-between',
  alignItems: 'center',
}

function App() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);
  
  const [messages] = useCollectionData(query, {idField: 'id'});
  const [ user ] = useAuthState(auth) // return user object via hook
  
  return (
    <div>
      <Navbar dark style={navbar}>
        <NavTitle>Chatroom</NavTitle>
        <SignOut auth={auth}/>
      </Navbar>
      <section>
        { user ? <ChatRoom auth={auth} messages={messages} messagesRef={messagesRef} /> : <SignIn auth={auth} firebase={firebase}/> }
      </section>
    </div>
  );
}

export default App;
