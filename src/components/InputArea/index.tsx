import React from "react";
import * as style from './style'
import {Item} from '../../types/Item'

type Props = {
  onAdd: (item: Item) => void
}

export const InputArea = ({onAdd}: Props) => {

  const handleAddEvent = () => {
    let newItem: Item = {
      date: new Date(2022, 4, 27),
      category: 'food',
      title: 'Item de teste',
      value: 250.25
    }
    onAdd(newItem)
  }
  return (
    <style.Container>
      <button onClick={handleAddEvent}>Adicionar</button>
    </style.Container>
  )
}