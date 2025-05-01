import React, { memo } from 'react'

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group'
import { PlusIcon } from 'lucide-react'
import {Button} from "@/components/ui";
import {AddEditTaskModal} from "@/components/modals";

export type FilterStatus = 'all' | 'active' | 'completed'

type TaskFilterSortControlsProps = {
  filterStatus: FilterStatus
  onFilterChange: (value: FilterStatus) => void
}

export const TaskFilterSortControls = memo(
  ({ filterStatus, onFilterChange }: TaskFilterSortControlsProps) => {
    return (
      <div className={'flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between'}>
        {/* Фильтр по статусу */}
        <div className={'flex items-center gap-2'}>
          <span className={'text-sm font-medium'}>Status:</span>
          <ToggleGroup
            type={'single'}
            value={filterStatus}
            onValueChange={value => value && onFilterChange(value as FilterStatus)}
          >
            <ToggleGroupItem value={'all'}>All</ToggleGroupItem>
            <ToggleGroupItem value={'active'}>Active</ToggleGroupItem>
            <ToggleGroupItem value={'completed'}>Archive</ToggleGroupItem>
          </ToggleGroup>
        </div>
        <AddEditTaskModal
            trigger={
              <Button>
                <PlusIcon className={'mr-2 h-4 w-4'} />
                  Create new note
              </Button>
            }
        />
      </div>
    )
  }
)
