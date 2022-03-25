import React, { useEffect, useState } from 'react'
import axios from 'axios'
import BlogPost from '../BlogPost'
import { Container, Wrapper } from './GallaryElement'

const Gallaryy = () => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async () => {
      const response = await axios.get(
        'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
      )
      setPosts(response.data)
    }
    fetchPost()
  }, [])

  return (
    <Container>
      <Wrapper>
        {posts.map((item) => (
          <BlogPost
            key={item.id}
            img={item?.jetpack_featured_media_url}
            desc={item?.excerpt?.rendered}
          />
        ))}
      </Wrapper>
    </Container>
  )
}

export default Gallaryy
