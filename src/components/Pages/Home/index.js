import React, { useEffect, useState } from 'react'
import CardFour from '../../CardFour'
import CardOne from '../../CardOne'
import VideoCard from '../../VideoCard'
import axios from 'axios'

const Home = () => {
  const [posts, setPosts] = useState(null)

  useEffect(() => {
    const fetchPost = async () => {
      const res = await axios.get(
        'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
      )
      setPosts(res.data)
    }
    fetchPost()
  }, [])
  return (
    <>
      <CardOne posts={posts} />
      <VideoCard />
      <CardFour />
    </>
  )
}

export default Home
