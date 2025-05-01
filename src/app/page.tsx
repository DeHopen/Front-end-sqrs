import { TaskList } from '@/components'
import { Button } from '@/components/ui'
import React from "react";
import {AuthModal} from "@/components/modals/signup-signin-modal";

export default function Home() {
  return (
    <main className={'min-h-screen p-4 md:p-8'}>
      <div className={'mx-auto max-w-5xl'}>
        <div className={'mb-8 flex items-center justify-between'}>
          <h1 className={'text-2xl font-bold'}>My notes</h1>
            <AuthModal
                trigger={
                    <Button>
                        Log in
                    </Button>
                }
            />
        </div>

        <TaskList />
      </div>
    </main>
  )
}
