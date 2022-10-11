import React, {Component} from 'react';
import {connect} from "react-redux";
import {CommAction} from "./asyncCommAction";

class Comments extends Component {
    componentDidMount() {
        this.props.dispatch(CommAction())
    }

    render() {
        const {comments} = this.props

        const commentsMap = comments.comments.map((comment) => {
            return <p key={comment.id} >{ comment.name } </p>
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