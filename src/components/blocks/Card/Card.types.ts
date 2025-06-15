export interface CardProps {
  title?: string
  content?: string
  imageUrl?: string
  actions?: React.ReactNode
  variant?: 'default' | 'outlined' | 'elevated'
  children?: React.ReactNode
}

export type CardVariant = 'default' | 'outlined' | 'elevated'