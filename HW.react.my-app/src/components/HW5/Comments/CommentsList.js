import React from "react";

const CommentsList = (comments) => {
    const commentsRender =  comments.comments.map((comment) => (
        <p className={"p"} key={comment.id}>
            <li key={comment.id}>{comment.name}</li>
        </p>))
    return (
        <ul className="list-group mb2">
            {commentsRender}
        </ul>
    )
}
export default CommentsList