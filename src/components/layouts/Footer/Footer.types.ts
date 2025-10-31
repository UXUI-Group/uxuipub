export interface FooterProps {
  companyName?: string
  year?: number
  links?: FooterLink[]
}

export interface FooterLink {
  label: string
  href: string
}