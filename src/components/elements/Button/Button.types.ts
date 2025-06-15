export interface ButtonProps {
  variant?: 'core' | 'type_a'
  size?: 'small' | 'medium' | 'large'
  disabled?: boolean
  children: React.ReactNode
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export type ButtonVariant = 'core' | 'type_a'
export type ButtonSize = 'small' | 'medium' | 'large'