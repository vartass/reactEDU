import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {CommAction} from "./asyncCommAction";
import CommentsList from "./CommentsList";
import AddPagination from "../../HW8/Pagination/Pagination";

const Comments = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(1);
    const [commentsPerPage] = useState(10);
    useEffect(()=>{
        dispatch(CommAction())
    },[])
    const comments = useSelector((store)=>store.comments);

    const lastCommentIndex = currentPage * commentsPerPage
    const firstPostIndex = lastCommentIndex - commentsPerPage
    const currentComm = comments.comments.slice(firstPostIndex,lastCommentIndex)

    const paginate = pageNumber =>{setCurrentPage(pageNumber)}

    return (
        <div>
            <h1>COMMENTS</h1>
            <CommentsList comments={currentComm}/>
            <AddPagination
                currentPage={currentPage}
                elemPerPage={commentsPerPage}
                totalElem={comments.comments.length}
                paginate={paginate}
            />
        </div>
    );
};

export default Comments;