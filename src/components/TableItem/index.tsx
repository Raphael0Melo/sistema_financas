import * as style from './style'
import { Item } from '../../types/Item'
import { formatDate } from '../../helpers/dateFilter'
import { categories } from '../../data/categories'

type Props = {
  item: Item
}

export const TableItem = ({ item }: Props) => {
  return (
    <style.TableLine>
      <style.TableColumn>{formatDate(item.date)}</style.TableColumn>
      <style.TableColumn>
        <style.Category color={categories[item.category].color}>
          {categories[item.category].title}
        </style.Category>
      </style.TableColumn>
      <style.TableColumn>{item.title}</style.TableColumn>
      <style.TableColumn>
        <style.Value color={categories[item.category].expense ? "red" : "green"}>
          {item.value}
        </style.Value>
      </style.TableColumn>
    </style.TableLine>
  )
}