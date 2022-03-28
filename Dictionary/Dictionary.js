import React, { useState, useEffect } from 'react'
import Post from './Post/Post'
import Pagination from './Pagination/Pagination'
import InputFilter from './InputFilter/InputFilter'
import * as axios from 'axios'

const Dictionary = props => {

   const [posts, setPosts] = useState([])
   const [inputValue, setInputValue] = useState([])
   const [currentPage, setCurrentPage] = useState(1)
   const [count] = useState(4)

   useEffect(() => {
      const getPosts = async() => {
         const res = await axios.get('https://my-json-server.typicode.com/RustamKurbonov/jstest/db')
         setPosts(res.data.posts)
      }
      getPosts()
   }, [])

   const filterPage = posts.filter(item => {
      return item.title.toLowerCase().includes(inputValue)
   })

   const lastIndex = currentPage * count
   const firstIndex = lastIndex - count
   const currentPosts = filterPage.slice(firstIndex, lastIndex)

   const paginationFunction = number => { 
      return setCurrentPage(number)
   }
  
   return (
      <div className='post-container'>
         <div className="post">
            <div className="post__title-main title">
               Справочники
            </div>
            <InputFilter onChengeInput = {(e) => (setInputValue(e.target.value.toLowerCase()))} />
            {
               currentPosts.map( (post, index) => (
                  <Post key = {index} title = {post.title} text = {post.description} />
               ))
            }
         </div>
         <Pagination count={count} total={filterPage.length} paginationFunction= {paginationFunction}/>
      </div>
   )
}

export default Dictionary;