import React from "react";

const PostList = (posts) => {
    const postRender =  posts.posts.map((post) => (
        <p className={"p"} key={post.id}>
            <li key={post.id}>{post.title}</li>
        </p>))
    return (
        <ul className="list-group mb2">
            {postRender}
        </ul>
    )
}
export default PostList