import React from 'react'
import { Button, Card, NavTitle } from '../styles/components'
import logo from '../firebase-logo.png'

const SignIn = ({firebase, auth}) => {

  const handleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <div className="row p-5">
      <Card className="col-md-4">
        <NavTitle>
          <img src={logo} alt='logo' />
          <div>Sign in to CHAT with us!</div>
        </NavTitle>
        <Button outlined color="cornflowerblue" onClick={handleSignIn} >Sign In with Google</Button>
      </Card>
    </div>
  );
}
    
export default SignIn;