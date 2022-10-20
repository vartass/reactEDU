import React, {useEffect, useState} from 'react';
import axios from "axios";

const Comments = () => {
    let [comments, setComments] = useState();

    useEffect(()=>{
        axios('https://jsonplaceholder.typicode.com/comments')
            .then(res =>
                setComments(res.data)
            )
    },[])

    const commentsMap = comments?.map((comment)=> <p className={"p"} key={comment.id}>{comment.name} </p>)
    return (
        <div>
            <h1>COMMENTS</h1>
            {commentsMap}
        </div>
    );
};

export default Comments;