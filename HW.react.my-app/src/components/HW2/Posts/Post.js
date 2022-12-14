import "../../HW8/router/AppRoutes.css"
import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {PostAction} from "./postsAction";
import AddPagination from "../../HW8/Pagination/Pagination";
import PostList from "./PostList";
import AddPost from "./AddPost";
import RequireAuth from "../../HW8/router/RequireAuth";

const Post = () => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);
  const itemPost = "itemPost"

  useEffect(() => {
    dispatch(PostAction())
  }, [])

  const posts = useSelector((store) => store.posts);

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = posts.posts.slice(firstPostIndex, lastPostIndex)

  const paginate = pageNumber => {
    setCurrentPage(pageNumber)
  }

  return (
    <div>
      <h1>POSTS</h1>
      <RequireAuth>
        <AddPost props={"itemPost"}/>
      </RequireAuth>
      <PostList posts={currentPosts}/>
      <AddPagination
        currentPage={currentPage}
        elemPerPage={postsPerPage}
        totalElem={posts.posts.length}
        paginate={paginate}
      />
    </div>
  )
};

export default Post;