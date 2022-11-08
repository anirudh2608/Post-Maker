import Header from "../component/Footer";
import { connect } from 'react-redux'
import {
    switch_to_home,
    switch_to_profile,
    switch_to_liked
} from "../services/action/action"
import Footer from "../component/Footer";


const mapDispatchToProps = (dispatch) => ({

    homeHandler: data => dispatch(switch_to_home(data)),

    profiletHandler: data => dispatch(switch_to_profile(data)),

    likedHandler: data => dispatch(switch_to_liked(data))
})


export default connect(null, mapDispatchToProps)(Footer)
