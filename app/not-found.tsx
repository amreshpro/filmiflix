"use client";
import { Button } from '@/components/ui/button'
import {  useRouter } from 'next/navigation'
import React from 'react'

function NotFound() {
const router = useRouter();

    function goToHome(){
    router.push("/")
    }
  return (
    <div className='h-screen text-2xl  flex flex-col gap-4 justify-center items-center ' >
      <h1 className='text-red-500'>404: Page Not Found</h1>
   <Button onClick={goToHome} variant={'destructive'}>Go to Home</Button>
    </div>
  )
}

export default NotFound
