export interface TabsProps {
  variant?: 'core' | 'secondary' | 'type_a';
  size?: 'small' | 'medium' | 'large';
  tabs?: TabItem[];
  activeTab?: number;
  onTabChange?: (index: number) => void;
}

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export type TabsVariant = 'core' | 'type_a';
export type TabsSize = 'small' | 'medium' | 'large';
