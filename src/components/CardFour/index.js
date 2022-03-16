import React from 'react'
import Gallary from '../Gallary'
import {
  Arrow,
  Container,
  PhotoLink,
  PhotoName,
  PhotoWrapper,
  TextWrapper,
} from './CfourElement'

const CardFour = () => {
  return (
    <Container>
      <TextWrapper>
        <PhotoName>Category Name</PhotoName>
        <PhotoLink>
          More Photo
          <Arrow />
        </PhotoLink>
      </TextWrapper>
      <PhotoWrapper>
        <Gallary />
      </PhotoWrapper>
    </Container>
  )
}

export default CardFour
