import React, { useState, useEffect } from "react";
import { getAllPosts } from "../api";

import './posts.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPostData = async () => {
    try {
      const result = await getAllPosts();
      console.log(result);
      if (result) {
        setPosts(result);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPostData();
  }, []);

  return (
    <div id="posts">
      <h1>THIS IS POSTS</h1>
      {posts.map((post) => (
        <div id='post-list' key={post.id}>
          <br />
          <h4>{post.title}</h4>
          <p>Description: {post.description}</p>
          <p>User: {post.author.username}</p>
          <p>Price: {post.price}</p>
          <p>Location:{post.location}</p>
          { post.willDeliver ?
          <p className='descriptions'>delivery: Yes</p>
            :null
          }
          <br />
          {"------"}
        </div>
      ))}
    </div>
  );
};

export default Posts;
