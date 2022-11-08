import App from "../App";
import { connect } from 'react-redux'
import {
    switch_to_home,
    switch_to_profile,
    switch_to_liked,
    save_user,
    fetchData
} from "../services/action/action"


const mapDispatchToProps = (dispatch) => ({

    homeHandler: data => dispatch(switch_to_home(data)),

    profiletHandler: data => dispatch(switch_to_profile(data)),

    likedHandler: data => dispatch(switch_to_liked(data)),

    retrieveUserHandler: data => dispatch(save_user(data)),

    fetchData : () => dispatch(fetchData())
    
})

const mapStateToProps = (state) => ({
    data: state
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
