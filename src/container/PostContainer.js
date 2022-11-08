import Post from '../component/Post'
import { connect } from 'react-redux'
import {
    edit_post,
    delete_post,
    like_post,
    bookmark_post
} from "../services/action/action"

const mapDispatchToProps = (dispatch) => ({

    editPostHandler: data => dispatch(edit_post(data)),

    deletePostHandler: data => dispatch(delete_post(data)),

    likePostHandler: data => dispatch(like_post(data)),

    bookmarkPostHandler: data => dispatch(bookmark_post(data))
})

const mapStateToProps = (state) => ({
    data: state
})


export default connect(mapStateToProps,mapDispatchToProps)(Post)
