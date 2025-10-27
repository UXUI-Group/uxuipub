export interface FooterProps {
  companyName?: string
  year?: number
  sections?: FooterSection[]
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterLink {
  label: string
  href: string
}