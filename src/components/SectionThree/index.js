import axios from 'axios'
import React, { useEffect, useState } from 'react'
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
  const [posts, setPosts] = useState([])

  //useeffect is for making side effects e.g making calls to external api. the goalis to make our component as pure as possible
  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
      )
      setPosts(response.data)
    }
    fetchPost()
  }, [])
  console.log(posts)

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
