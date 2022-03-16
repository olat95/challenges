import React from 'react'
import FirstImg from '../../images/Rectangle 5 (1).svg'
import {
  CardDate,
  CardDesc,
  CardImage,
  CardInfo,
  CardSubTitle,
  Container,
  Wrapper,
} from './CThreeElement'

const CardThree = ({ post }) => {
  return (
    <Container>
      <Wrapper>
        <CardImage src={FirstImg} alt='' />
        <CardInfo>
          <CardSubTitle>{post.title}</CardSubTitle>
          <CardDesc>{post.content}</CardDesc>
          <CardDate>1 hour ago</CardDate>
        </CardInfo>
      </Wrapper>
    </Container>
  )
}

export default CardThree
