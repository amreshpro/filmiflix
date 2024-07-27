import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

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
