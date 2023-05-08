import clsx from 'clsx'
import React, { ButtonHTMLAttributes } from 'react'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
}

export const Button = (props: Props) => {
  return (
    <button {...props} className={clsx('', props.className)}>
      {props.children}
    </button>
  )
}

export default Button
