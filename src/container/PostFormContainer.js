import PostForm from '../component/PostForm'
import { connect } from 'react-redux'
import { add_post } from "../services/action/action"

const mapDispatchToProps = (dispatch) => ({
    addPostHandler: data => dispatch(add_post(data))
})

const mapStateToProps = (state) => ({
    data: state.navigatorReducer.account
})

export default connect(mapStateToProps,mapDispatchToProps)(PostForm)
