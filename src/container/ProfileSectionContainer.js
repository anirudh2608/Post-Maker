import ProfileSection from "../component/ProfileSection";
import { connect } from 'react-redux'

const mapStateToProps = (state) => (
    {
        data: state.reducer.posts.map((post) => (
            (post.userId === state.navigatorReducer.account.userId) && (post) )
        ),
        user :state.navigatorReducer.account 
    }
)

export default connect(mapStateToProps)(ProfileSection)