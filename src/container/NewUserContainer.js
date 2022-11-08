import NewUser from '../component/NewUser'
import { connect } from 'react-redux'
import {
    new_user
} from "../services/action/action"


const mapDispatchToProps = (dispatch) => ({

    newUserHandler: data => dispatch(new_user(data))
    
})

const mapStateToProps = (state) => ({
    data: state.navigatorReducer.account
})

export default connect(mapStateToProps, mapDispatchToProps)(NewUser)
