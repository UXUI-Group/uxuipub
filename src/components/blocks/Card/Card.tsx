import React from 'react';
import Image from 'next/image';
import { CardProps } from './Card.types';
import './Card_styles/Card.scss';

export const Card: React.FC<CardProps> = ({ title, content, imageUrl, actions, variant = 'default', children }) => {
  return (
    <div className={`card card--${variant}`}>
      {imageUrl && (
        <div className="card__image">
          <Image src={imageUrl} alt={title || 'Card image'} width={300} height={200} style={{ objectFit: 'cover' }} />
        </div>
      )}
      <div className="card__content">
        {title && <h3 className="card__title">{title}</h3>}
        {content && <p className="card__text">{content}</p>}
        {children}
      </div>
      {actions && <div className="card__actions">{actions}</div>}
    </div>
  );
};
