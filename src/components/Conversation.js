import React from 'react'




const Conversation = ({auth, message}) => {
  const { text, uid, photoURL, id } = message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <>
      <li className={messageClass}>
        <img src={photoURL} alt={id} />
        <strong>{text}</strong>
      </li>
    </>
  );
}
  
export default Conversation;