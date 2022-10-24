// import React from 'react';
// import img from "../components/HW1/img/barcelona.png";
import {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "@mui/material";

const Post = () => {
    let [posts, setPosts] = useState();

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/posts')
            .then(res =>
                setPosts(res.data)
            )
    }, [])

    const postsMap = posts?.map((post) => <Link sx={{color: 'black'}}>
        <p className={"p"} key={post.id}>
            <li key={post.id}>{post.title}</li>
        </p>
    </Link>)
    return (
        <div>
            <h1>POSTS</h1>
            {postsMap}
        </div>
    )
};

export default Post;