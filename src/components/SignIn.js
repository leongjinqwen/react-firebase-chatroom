import React from 'react'
import {Button} from '../styles/components'


const SignIn = ({firebase, auth}) => {

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <>
      <Button onClick={handleSignIn} >Sign In with Google</Button>
    </>
  );
}
    
export default SignIn;