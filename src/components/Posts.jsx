import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";

const Posts = () => {
const [posts, setPosts] = useState([])


const getPostData = async () => {
  try {
    const result = await getAllPosts()
    console.log(result)
    if(result){
      setPosts(result)
    }
  } catch (error) {
    console.error(error)
  }
}


useEffect(() =>{
  getPostData()
},[])

// const mapPosts = posts.map((post) => {
//   return (
//     <div>
//       <h3>Name: {post.description}</h3>
//       <h3>Goal: {post.price}</h3>
//       <h3>Creator: {post.title}</h3>
//       <br />
//     </div>
//   );
// });


// const mapPosts = posts.map((post) => {
//   console.log(post)
//   return(
//     <div>
//       <h3> post</h3>
//     </div>
//   )
//   console.log(post)
// })
  return (
  <div>THIS IS POSTS
  {/* {posts && posts.length ? <p>{mapPosts}</p> : null} */}
  </div>
  )
};



export default Posts;
