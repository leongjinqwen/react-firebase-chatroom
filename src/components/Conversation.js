import React from 'react'
import { Avatar} from '../styles/components'

const messageSentStyle = {
  display:'flex',
  flexDirection:'row-reverse',
  justifyContent: 'end',
  alignItems: 'center',
  margin:'4px',
}
const messageReceivedStyle = {
  display:'flex',
  alignItems: 'center',
  margin:'4px',
}
const sentStyle = {
  border:'1px solid #27bb8a',
  borderRadius: '15px',
  display: 'inlineBlock',
  background:"#27bb8a6c",
  color: '#e9e9e9',
  padding: '0.5em',
  textAlign:'right',
}

const receivedStyle = {
  border:'1px solid #97bafc',
  borderRadius: '15px',
  display: 'inlineBlock',
  background: "#97bafc93",
  color: '#e9e9e9',
  padding: '0.5em',
  textAlign:'left',
}

const Conversation = ({auth, message}) => {
  const { text, uid, photoURL, id } = message;
  const containerStyle = uid === auth.currentUser.uid ? messageSentStyle : messageReceivedStyle;
  const messageClass = uid === auth.currentUser.uid ? sentStyle : receivedStyle;
  return (
    <>
      <span style={containerStyle} >
        <Avatar src={photoURL} alt={id} />
        <strong style={messageClass}>{text}</strong>
      </span>
    </>
  );
}
  
export default Conversation;