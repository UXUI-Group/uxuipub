'use client'

import React from 'react'
import { ButtonProps } from './Button.types'
import './Button_styles/Button.scss'

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'core',
  size = 'medium',
  disabled = false,
  children, 
  onClick,
  type = 'button'
}) => {
  return (
    <button 
      className={`btn btn--${variant} btn--${size}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  )
}