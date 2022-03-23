import React from 'react'
import {
  CardDate,
  CardDesc,
  CardImage,
  CardInfo,
  CardSubTitle,
  Container,
  Wrapper,
} from './BPElement'
import DOMPurify from 'dompurify'

const BlogPost = ({ img, subtitle, desc, date }) => {
  return (
    <Container>
      <Wrapper>
        <CardImage src={img} alt='' />
        <CardInfo>
          <CardSubTitle>{subtitle}</CardSubTitle>
          <CardDesc
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(desc),
            }}
          ></CardDesc>
          <CardDate>{date}</CardDate>
        </CardInfo>
      </Wrapper>
    </Container>
  )
}

export default BlogPost
