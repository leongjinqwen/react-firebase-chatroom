import React from 'react'
import {Button} from '../styles/components'



const SignOut = ({auth}) => {

  return auth.currentUser && (
    <>
      <Button onClick={()=>auth.signOut()} >Sign Out</Button>
    </>
  );
}
    
export default SignOut;