import React from 'react'
import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'


function ClerkSignInButton({className=''}) {
  return (
    <div className={className}>
        {/* clerk sign in button */}
        <SignedOut>
          <div className='text-sm text-white bg-cyan-700 px-2 py-2 rounded-lg w-fit'>
            <SignInButton />
          </div>
        </SignedOut>
        <SignedIn>
     <UserButton /> 
        </SignedIn>
    </div>
  )
}

export default ClerkSignInButton
