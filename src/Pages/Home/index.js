import React from 'react'
import CardFour from '../../components/CardFour'
import CardOne from '../../components/CardOne'
import VideoCard from '../../components/VideoCard'
import axios from 'axios'

const Home = () => {
  // const [posts, setPosts] = useState([])

  // useEffect(() => {
  //   const fetchPost = async () => {
  //     const res = await axios.get(
  //       'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
  //     )
  //     setPosts(res.data)
  //   }
  //   fetchPost()
  // }, [])
  return (
    <>
      <CardOne />
      <VideoCard />
      <CardFour />
    </>
  )
}

export default Home
