import { useMemo, useState } from 'react'
import type { ProjectCategory } from '../../content/types'

export type ProjectFilterKey = ProjectCategory | 'all'

/** 只关心筛选行为，不认识具体项目内容。 */
export function useProjectFilter<T extends { category: ProjectCategory }>(
  items: T[],
  initial: ProjectFilterKey = 'all',
) {
  const [filter, setFilter] = useState<ProjectFilterKey>(initial)

  const visible = useMemo(
    () => (filter === 'all' ? items : items.filter((item) => item.category === filter)),
    [filter, items],
  )

  return { filter, setFilter, visible }
}
