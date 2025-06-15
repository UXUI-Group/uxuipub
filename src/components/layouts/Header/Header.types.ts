export interface HeaderProps {
  logo?: string
  isLoggedIn?: boolean
  userName?: string
  onLoginClick?: () => void
  onLogoutClick?: () => void
}

export interface NavigationItem {
  label: string
  href: string
  isActive?: boolean
}