'use client'

import { ReactNode } from 'react'

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog'
import { useAppDispatch } from '@/store'
import { deleteTask } from '@/store/slices'
import { Task } from '@/types/instances'
import { CircleAlertIcon } from 'lucide-react'

export type DeleteTaskModalProps = {
  trigger: ReactNode
  id: Task['id']
}

export const DeleteTaskModal = ({ trigger, id }: DeleteTaskModalProps) => {
  const dispatch = useAppDispatch()

  const handleDelete = () => {
    dispatch(deleteTask({ id }))
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{trigger}</AlertDialogTrigger>
      <AlertDialogContent>
        <div className={'flex flex-col gap-2 max-sm:items-center sm:flex-row sm:gap-4'}>
          <div
            className={'flex size-9 shrink-0 items-center justify-center rounded-full border'}
            aria-hidden={'true'}
          >
            <CircleAlertIcon className={'opacity-80'} size={16} />
          </div>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete a note?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete the issue? This action is irreversible.
            </AlertDialogDescription>
          </AlertDialogHeader>
        </div>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
