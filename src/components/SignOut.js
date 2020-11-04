import React from 'react'
import {Button} from '../styles/components'



const SignOut = ({auth}) => {

  return auth.currentUser && (
    <>
      <Button outlined color='darkred' onClick={()=>auth.signOut()} >Sign Out</Button>
    </>
  );
}
    
export default SignOut;