'use client'
import React, { ReactNode } from 'react'
import { useForm } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useAppDispatch } from '@/store'
import { addTask, editTask } from '@/store/slices'
import { zodResolver } from '@hookform/resolvers/zod'
import { v4 } from 'uuid'
import { z } from 'zod'

const formSchema = z.object({
  text: z.string().min(1, 'Task description is required'),
  completed: z.boolean(),
  priority: z.enum(['low', 'medium', 'high'], {
    required_error: 'Please select a priority level',
  }),
})

type FormValues = z.infer<typeof formSchema>

type TaskFormDialogProps = {
  id?: string
  trigger: ReactNode
  initialData?: FormValues
  editMode?: boolean
}

export const AddEditTaskModal = ({ id, trigger, initialData, editMode }: TaskFormDialogProps) => {
  const dispatch = useAppDispatch()
  const isEditMode = !!initialData

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      text: '',
      completed: false,
      priority: 'medium',
    },
  })

  const [open, setOpen] = React.useState(false)

  const onSubmit = (data: FormValues) => {
    if (editMode && id) {
      dispatch(editTask({ id, task: { ...data } }))
    } else {
      dispatch(addTask({ id: v4(), ...data }))
    }

    form.reset()
    setOpen(false)
  }

  return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>{trigger}</DialogTrigger>
        <DialogContent className={'sm:max-w-md'}>
          <DialogHeader>
            <DialogTitle>{isEditMode ? 'Edit note' : 'Create new note'}</DialogTitle>
            <DialogDescription>
              {isEditMode ? 'Edit an existing note.' : 'Add a new note to the list.'}
            </DialogDescription>
          </DialogHeader>

          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6 py-4'}>
              {/* Текст */}
              <FormField
                  control={form.control}
                  name={'text'}
                  render={({ field }) => (
                      <FormItem>
                        <FormLabel>Описание задачи</FormLabel>
                        <FormControl>
                          <Input placeholder={'Enter a description for the note...'} {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                  )}
              />

              <DialogFooter>
                <Button type={'submit'} className={'w-full'}>
                  {isEditMode ? 'Edit note' : 'Create new note'}
                </Button>
              </DialogFooter>
            </form>
          </Form>
        </DialogContent>
      </Dialog>
  )
}
