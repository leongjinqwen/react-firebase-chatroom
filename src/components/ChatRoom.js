import React, { useRef,useState } from 'react'
import Conversation from './Conversation';
import firebase from 'firebase/app'



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
      <div>
        {
          messages ? messages.map((mes)=>{
            return (
              <Conversation key={`mes-${mes.id}`} auth={auth} message={mes}/>
            )
          })
          : null
        }
      </div>

      <span ref={dummy}></span>

      <h1>{auth.currentUser.displayName}</h1>
      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <input type="submit" value="Send" disabled={!formValue}/>
      </form>
    </>
  );
}
  
export default ChatRoom;