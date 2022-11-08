import SavedPostsSection from "../component/SavedPostsSection";
import { connect } from 'react-redux'

const mapStateToProps = (state) =>({
    data : state,
    user :state.navigatorReducer.account 
})

export default  connect(mapStateToProps)(SavedPostsSection)