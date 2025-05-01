'use client'

import React, { useEffect, useState } from 'react'

import { TaskCard } from '@/components/task-card'
import { TaskCardActions } from '@/components/task-card-actions'
import {
  FilterStatus,
  TaskFilterSortControls,
} from '@/components/task-filter-sort-controls'
import { useFilteredSortedTasks } from '@/lib/hooks'
import { useAppSelector } from '@/store'
import { tasksSelector } from '@/store/selectors'

export const TaskList = () => {
  const tasks = useAppSelector(tasksSelector)

  const [filterStatus, setFilterStatus] = useState<FilterStatus>('all')

  const filteredAndSortedTasks = useFilteredSortedTasks(tasks, filterStatus)

  // Решение проблемы гидрации nextjs
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  if (!isClient) {
    return null
  }

  return (
    <div className={'space-y-4'}>
      <TaskFilterSortControls
        filterStatus={filterStatus}
        onFilterChange={setFilterStatus}
      />

      <div className={'grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'}>
        {filteredAndSortedTasks.map(task => (
          <TaskCard key={task.id} task={task} actionButtons={<TaskCardActions task={task} />} />
        ))}
      </div>
    </div>
  )
}
