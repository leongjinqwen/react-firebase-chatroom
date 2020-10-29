import React from 'react'



const SignIn = ({firebase, auth}) => {

  const handleSignIn = () => {
    console.log("sign in")
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider)
  }
  return (
    <>
      <button onClick={handleSignIn} >Sign In with Google</button>
    </>
  );
}
    
export default SignIn;