import React from 'react'
// import imageCards from '../../data'
// import FirstImg from '../../images/Rectangle 5 (1).svg'
import {
  CardDate,
  CardDesc,
  CardImage,
  CardInfo,
  CardSubTitle,
  Container,
  Wrapper,
} from './CThreeElement'

const CardThree = ({ img, subtitle, desc }) => {
  return (
    <Container>
      <Wrapper>
        <CardImage src={img} alt='' />
        <CardInfo>
          <CardSubTitle>{subtitle}</CardSubTitle>
          <CardDesc>{desc}</CardDesc>
          <CardDate>1 hour ago</CardDate>
        </CardInfo>
      </Wrapper>
    </Container>
  )
}

export default CardThree
