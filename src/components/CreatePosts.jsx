import React, {useState} from "react";
import { useNavigate } from "react-router-dom";

import { createPosts } from "../api";


const CreatePosts = ({username, posts,setPosts}) => {
    const [title, setTitle] = useState('')

    const navigate = useNavigate()
    const handleSubmit = async (event) => {
        event.preventDefault()
    }

    return ( 
        <div>
        <p>This is create posts</p>
        </div>
     );
}
 
export default CreatePosts;