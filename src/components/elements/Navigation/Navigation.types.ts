export interface NavigationProps {
  currentPath?: string;
}

export interface NavItem {
  label: string;
  href: string;
  isActive?: boolean;
}
