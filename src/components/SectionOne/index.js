import React, { useEffect, useState } from 'react'
import {
  Arrow,
  Container,
  ImageWrapper,
  PostLink,
  TitleLink,
  TitleName,
  TitleWrapper,
} from './SOneElement'
import axios from 'axios'
import BlogPost from '../BlogPost'

const SectionOne = () => {
  const [posts, setPosts] = useState([])

  //useeffect is for making side effects e.g making calls to external api. the goalis to make our component as pure as possible
  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
      )
      setPosts(res.data)
    }
    fetchPost()
  }, [])
  console.log(posts)

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
