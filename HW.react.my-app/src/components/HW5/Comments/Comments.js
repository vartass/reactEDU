import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Link} from "@mui/material";

const Comments = () => {
    let [comments, setComments] = useState();

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/comments')
            .then(res =>
                setComments(res.data)
            )
    },[])

    const commentsMap = comments?.map((comment)=> <Link sx={{ color: 'black'}}>
        <p className={"p"} key={comment.id}><li key={comment.id}>{comment.name}</li></p>
    </Link>)
    return (
        <div>
            <h1>COMMENTS</h1>
            {commentsMap}
        </div>
    );
};

export default Comments;