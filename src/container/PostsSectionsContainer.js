import PostsSection from "../component/PostsSection";
import { connect } from 'react-redux'

const mapStateToProps = (state) => ({
    data: state
})

export default connect(mapStateToProps)(PostsSection)