import axios from 'axios'
import { useEffect, useState } from 'react'

export const useAxiosGet = (dataUrl) => {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchPost = async (url) => {
      const response = await axios.get(url)
      setPosts(response.data)
    }
    fetchPost(dataUrl)
  }, [dataUrl])
  console.log(posts)
  return { posts }
}

export const UseAxiosGetById = (dataUrl) => {
  const [singlePost, setSinglePost] = useState([])
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  useEffect(() => {
    const fetchPost = async (url) => {
      const response = await axios.get(url)
      setSinglePost(response.data)
    }
    fetchPost(dataUrl)
  }, [dataUrl])

  const handleSubmit = async (e) => {
    e.preventDefault()
    let url = 'https://brooksandblake.com/blogapis/wp-json/wp/v2/posts/'
    message &&
      (await axios.post(url, {
        name,
        email,
        message,
      }))
    setName('')
    setEmail('')
    setMessage('')
  }
  return {
    singlePost,
    handleSubmit,
    name,
    email,
    message,
    setName,
    setEmail,
    setMessage,
  }
}
