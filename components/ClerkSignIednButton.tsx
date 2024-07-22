import { SignedOut, SignInButton, SignedIn, UserButton } from '@clerk/nextjs'
import React from 'react'
import { Button } from './ui/button'

function ClerkSignInButton({className=''}) {
  return (
    <div className={className}>
        {/* clerk sign in button */}
        <SignedOut>
          <Button variant={"outline"}>
            <SignInButton />
          </Button>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
    </div>
  )
}

export default ClerkSignInButton
