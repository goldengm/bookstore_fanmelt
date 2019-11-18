import React from 'react'
import { Container, Img } from './Styled'

interface IProps {
  price: number;
  name: string;
  title: string;
  tags: string[];
  img: string;
}

export const Card = ({ price, name, title, tags, img}: IProps) => {
  return (
    <Container>
      <Img className="img" src={img} />
      <div className="price">{`$${price}`}</div>
      <div className="details">
        <div className="title">{title}</div>
        <div className="name">{name}</div>
        <div className="tags">
          {tags && tags.map(tag => <button>{tag}</button>)}
        </div>
      </div>
    </Container>
  )
}
