import {useMemo} from 'react'

import {Task} from '@/types/instances'

export type FilterStatus = 'all' | 'active' | 'completed'

export const useFilteredSortedTasks = (
  tasks: Task[],
  filterStatus: FilterStatus,
) => {
  return useMemo(() => {
    // Фильтрация задач по статусу
    return tasks.filter(task => {
      if (filterStatus === 'all') {
        return true
      }
      if (filterStatus === 'active') {
        return !task.completed
      }
      if (filterStatus === 'completed') {
        return task.completed
      }

      return true
    })
  }, [tasks, filterStatus])
}
