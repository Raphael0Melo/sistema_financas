import { useEffect, useState } from 'react'
import * as style from './App.style'
import { Item } from './types/Item'
import { Category } from './types/Category'
import { categories } from './data/categories'
import { items } from './data/items'
import { filterListByMonth, getCurrentMonth } from './helpers/dateFilter'
import { TableArea } from './components/TableArea'
import { InfoArea } from './components/InfoArea'


const App = () => {
  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth())

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth))
  }, [list, currentMonth])

  const handleMonthChange = (newMonth: string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <style.Container>
      <style.Header>
        <style.HeaderText>Sistema de Finanças</style.HeaderText>
      </style.Header>
      <style.Body>

        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange} />

        {/* area de inserção*/}

        <TableArea list={list} />

      </style.Body>
    </style.Container>
  )
}

export default App