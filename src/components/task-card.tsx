'use client'

import { memo, ReactNode, useCallback } from 'react'

import { Checkbox } from '@/components/ui'
import { cn } from '@/lib/utils'
import { useAppDispatch } from '@/store'
import { editTask } from '@/store/slices'
import { Task } from '@/types/instances'
import { CheckCircle2 } from 'lucide-react'

type TaskCardProps = {
  task: Task
  actionButtons?: ReactNode
}

export const TaskCard = memo(({ task, actionButtons }: TaskCardProps) => {
  const dispatch = useAppDispatch()

  const handleToggle = useCallback(
      (completed: boolean) => {
        dispatch(editTask({ id: task.id, task: { ...task, completed } }))
      },
      [dispatch, task]
  )

  return (
      <div
          className={cn(
              'group relative rounded-md border shadow-sm transition-all duration-200',
          )}
      >
        <div className="absolute inset-x-0 top-0 h-1 rounded-t-md bg-gray-900" />

        <div className="p-4">
          <div className="flex items-start gap-3">
            <div className="pt-0.5">
              <Checkbox
                  checked={task.completed}
                  onCheckedChange={handleToggle}
                  className={cn(
                      'h-5 w-5 rounded-full transition-all',
                      task.completed ? 'opacity-100' : 'opacity-80'
                  )}
              />
            </div>

            <div className="flex-1 min-w-0">
              {/* Текст задачи теперь может переноситься */}
              <h3
                  className={cn(
                      'w-full whitespace-normal break-words font-medium text-gray-900 transition-all',
                      task.completed && 'text-gray-500 line-through'
                  )}
              >
                {task.text}
              </h3>
            </div>
          </div>
        </div>

        {/* Индикатор статуса */}
        {task.completed && (
            <div className="absolute -right-1 -top-1">
              <div className="rounded-full bg-green-100 p-1">
                <CheckCircle2 className="h-4 w-4 text-green-600" />
              </div>
            </div>
        )}

        {/* Кнопки действий */}
        <div
            className="absolute bottom-3 right-3 opacity-0 transition-opacity group-hover:opacity-100"
        >
          {actionButtons}
        </div>
      </div>
  )
})
