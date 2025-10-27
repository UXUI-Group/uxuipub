export interface NoticeBoardProps {
  title?: string
  viewAllLink?: string
  notices?: Notice[]
  className?: string
}

export interface Notice {
  id: number
  title: string
  date: string
  href?: string
}
