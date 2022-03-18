import * as style from './style'
import {formatCurrentMonth} from '../../helpers/dateFilter'

type Props = {
  currentMonth: string
  onMonthChange: (newMonth: string) => void
} 

export const InfoArea = ({currentMonth, onMonthChange}: Props) => {

  const handlePrevMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() - 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  const handleNextMonth = () => {
    let [year, month] = currentMonth.split('-')
    let currentDate = new Date(parseInt(year), parseInt(month) - 1, 1)
    currentDate.setMonth(currentDate.getMonth() + 1)
    onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`)
  }

  return (
    <div>
      <style.Container>
        <style.MonthArea>
          <style.MonthArrow onClick={handlePrevMonth}>⬅️</style.MonthArrow>
          <style.MonthTitle>{formatCurrentMonth(currentMonth)}</style.MonthTitle>
          <style.MonthArrow onClick={handleNextMonth}>➡️</style.MonthArrow>
        </style.MonthArea>
        <style.ResumeArea>

        </style.ResumeArea>
      </style.Container>
    </div>
  )
}