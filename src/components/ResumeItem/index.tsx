import React from "react"
import * as style from './style'

type Props = {
  title: string;
  value: number;
  color?: string;
}

export const ResumeItems = ({title, value, color}: Props) => {
  return (
    <style.Container>
      <style.Title>{title}</style.Title>
      <style.Info color={color}>R$ {value}</style.Info>
    </style.Container>
  )
}