'use client'

import React, { ReactNode, useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import {
    Dialog, DialogContent,
    DialogFooter,
    DialogTrigger,
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import {z} from "zod";

export type AuthModalProps = {
    trigger: ReactNode
    initialData?: FormValues
}

const formSchema = z.object({
    text: z.string().min(1, 'Value is required'),
})

type FormValues = z.infer<typeof formSchema>

export const AuthModal = ({ trigger, initialData }: AuthModalProps) => {
    const [mode, setMode] = useState<'sign-in' | 'sign-up'>('sign-in')
    const [open, setOpen] = React.useState(false)

    const form = useForm<FormValues>({
        resolver: zodResolver(formSchema),
        defaultValues: initialData || {
            text: '',
        },
    })

    const onSubmit = () => {

        form.reset()
        setOpen(false)
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className={'sm:max-w-md'}>
                <div className={'mt-6 flex max-sm:items-center sm:flex-row border rounded-md'}>
                    <button
                        onClick={() => setMode('sign-in')}
                        className={cn(
                            'flex-1 py-2 text-center text-sm font-medium transition-colors rounded-md',
                            mode === 'sign-in'
                                ? 'bg-primary text-white'
                                : 'bg-white text-black'
                        )}
                    >
                        Sign in
                    </button>
                    <button
                        onClick={() => setMode('sign-up')}
                        className={cn(
                            'flex-1 py-2 text-center text-sm font-medium transition-colors rounded-md',
                            mode === 'sign-up'
                                ? 'bg-primary text-white'
                                : 'bg-white text-primary'
                        )}
                    >
                        Sign up
                    </button>
                </div>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className={'space-y-6 py-4'}>
                        {/* Текст */}
                        <FormField
                            control={form.control}
                            name={'text'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder={'@Login123...'} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name={'text'}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input placeholder={'Password123...'} {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <DialogFooter>
                            <Button type={'submit'} className={'w-full'}>
                                Log in
                            </Button>
                        </DialogFooter>
                    </form>
                </Form>
            </DialogContent>
        </Dialog>
    )
}
