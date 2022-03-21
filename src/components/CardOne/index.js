import React from 'react'
import { imageCards } from '../../data'
import CardThree from '../CardThree'
import {
  Arrow,
  Container,
  ImageWrapper,
  TitleLink,
  TitleName,
  TitleWrapper,
} from './COneElement'

const CardOne = () => {
  return (
    <Container>
      <TitleWrapper>
        <TitleName>Category Name</TitleName>
        <TitleLink>
          More News
          <Arrow />
        </TitleLink>
      </TitleWrapper>
      <ImageWrapper>
        {imageCards.map((items) => (
          <CardThree
            key={items.id}
            img={items.img}
            subtitle={items.subtitle}
            desc={items.desc}
            // items={items}
          />
        ))}
      </ImageWrapper>
    </Container>
  )
}

export default CardOne
