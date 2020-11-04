import React, { useRef,useState } from 'react'
import Conversation from './Conversation';
import firebase from 'firebase/app'
import { ChatBox,Footer } from '../styles/components'



const ChatRoom = ({auth, messages, messagesRef}) => {

  const dummy = useRef()
  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div style={{maxHeight:"90%",overflow: 'scroll'}}>
        {
          messages ? messages.map((mes)=>{
            return (
              <Conversation key={`mes-${mes.id}`} auth={auth} message={mes}/>
            )
          })
          : null
        }
        <span ref={dummy}></span>
      </div>

      <ChatBox onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type message..." />
        <button type="submit" disabled={!formValue} >Send</button>
      </ChatBox>
      <Footer>© 2020 JwLeong.</Footer>
    </>
  );
}
  
export default ChatRoom;