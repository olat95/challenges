import React from 'react'
import CardThree from '../CardThree'
import {
  Arrow,
  Container,
  ImageWrapper,
  TitleLink,
  TitleName,
  TitleWrapper,
} from './COneElement'

const CardOne = ({ posts }) => {
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
        {posts.map((id, p) => (
          <CardThree key={id} post={p} />
        ))}
      </ImageWrapper>
    </Container>
  )
}

export default CardOne
