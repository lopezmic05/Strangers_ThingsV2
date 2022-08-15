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
          <h3>{post.author.username}</h3>
          <br />
          <p>{post.title}</p>
          <p>{post.description}</p>
          <p>{post.price}</p>
          <br />
          {"------"}
        </div>
      ))}
    </div>
  );
};

export default Posts;
