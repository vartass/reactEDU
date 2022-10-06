import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {CommAction} from "./asyncCommAction";
import initialStore from "../../../redux/initialStore";

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(CommAction())
        console.log(initialStore.comments);
    }

    render() {
        const {comments, dispatch} = this.props

        const commentsMap = comments.comments.map((comment) => {
            return <p key={comment.id} >{ comment.title } </p>
        })
        return (
            <div>
                {commentsMap}
            </div>
        )

    }
}
function mapStateToProps(store) {
    return{
        comments: store.comments
    }
}

export default connect(mapStateToProps)(Comments);