import * as style from './style'
import {Item} from '../../types/Item'
import { TableItem } from '../TableItem'

type Props = {
  list: Item[]
}

export const TableArea = ({list}: Props) => {
  console.log(list)
 return (
  <style.Table>
    <thead>
      <tr>
        <style.TableHeadColumn width={100}>Data</style.TableHeadColumn>
        <style.TableHeadColumn width={130}>Categoria</style.TableHeadColumn>
        <style.TableHeadColumn>Título</style.TableHeadColumn>
        <style.TableHeadColumn width={150}>Valor</style.TableHeadColumn>
      </tr>
    </thead>
    <tbody>
      {list.map((item, index) => (
        <TableItem key={index} item={item}/>
        ))}

    </tbody>
  </style.Table>
 ) 
}