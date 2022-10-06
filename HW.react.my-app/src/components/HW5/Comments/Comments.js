import React, {Component} from 'react';
import {connect} from "react-redux";
import axios from "axios";
import {logDOM} from "@testing-library/react";
import {CommAction} from "./asyncCommAction";

class Comments extends Component {
    componentDidMount() {
        // axios('https://jsonplaceholder.typicode.com/posts')
        //   .then(res => console.log(res))
        this.props.dispatch(CommAction())
    }

    render() {
        const {comments, dispatch} = this.props

        const commentsMap = comments.comments.map((comments,i) => {
            return <p className={"p"} key={comments.id}>{ comments.title } </p>
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