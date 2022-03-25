import React from 'react'
import { useAxiosGet } from '../../Hooks/useAxios'
import BlogPost from '../BlogPost'
import { PostLink } from '../SectionOne/SOneElement'

import {
  Arrow,
  Container,
  PhotoLink,
  PhotoName,
  PhotoWrapper,
  TextWrapper,
} from './SThreeElement'

const SectionThree = () => {
  const { posts } = useAxiosGet(
    'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
  )

  return (
    <Container>
      <TextWrapper>
        <PhotoName>TOP STORIES</PhotoName>
        <PhotoLink>
          More Photo
          <Arrow />
        </PhotoLink>
      </TextWrapper>
      <PhotoWrapper>
        {posts.map((item) => (
          <PostLink to={`/post/${item.id}`}>
            <BlogPost
              key={item?.id}
              img={item?.jetpack_featured_media_url}
              subtitle={item?.title?.rendered}
              desc={item?.excerpt?.rendered}
            />
          </PostLink>
        ))}
      </PhotoWrapper>
    </Container>
  )
}

export default SectionThree
