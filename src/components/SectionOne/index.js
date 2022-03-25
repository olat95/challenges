import React from 'react'
import {
  Arrow,
  Container,
  ImageWrapper,
  PostLink,
  TitleLink,
  TitleName,
  TitleWrapper,
} from './SOneElement'
import BlogPost from '../BlogPost'
import { useAxiosGet } from '../../Hooks/useAxios'

const SectionOne = () => {
  const { posts } = useAxiosGet(
    'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
  )
  //useeffect is for making side effects e.g making calls to external api. the goalis to make our component as pure as possible

  return (
    <Container>
      <TitleWrapper>
        <TitleName>NEWS</TitleName>
        <TitleLink>
          More News
          <Arrow />
        </TitleLink>
      </TitleWrapper>
      <ImageWrapper>
        {posts.map((post) => (
          <PostLink to={`/post/${post.id}`}>
            <BlogPost
              key={post?.id}
              img={post?.jetpack_featured_media_url}
              subtitle={post?.title?.rendered}
              desc={post?.excerpt?.rendered}
            />
          </PostLink>
        ))}
      </ImageWrapper>
    </Container>
  )
}

export default SectionOne
