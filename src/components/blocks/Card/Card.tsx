import React from 'react'
import { CardProps } from './Card.types'
import './Card_styles/Card.scss'

export const Card: React.FC<CardProps> = ({
  title,
  content,
  imageUrl,
  actions,
  variant = 'default',
  children
}) => {
  return (
    <div className={`card card--${variant}`}>
      {imageUrl && (
        <div className="card__image">
          <img 
            src={imageUrl} 
            alt={title || 'Card image'} 
            onError={(e) => {
              // 이미지 로드 실패 시 placeholder 이미지 표시
              const target = e.target as HTMLImageElement
              target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlPC90ZXh0Pjwvc3ZnPg=='
            }}
          />
        </div>
      )}
      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        {content && <p className="card__text">{content}</p>}
        {children}
      </div>
      {actions && (
        <div className="card__actions">
          {actions}
        </div>
      )}
    </div>
  )
}