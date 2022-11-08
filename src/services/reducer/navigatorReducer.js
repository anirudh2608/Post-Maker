import { SWITCH_TO_HOME } from "../constant/constant"
import { SWITCH_TO_PROFILE } from "../constant/constant"
import { SWITCH_TO_LIKED } from "../constant/constant"
import { BOOKMARK_POST } from "../constant/constant"
import { SAVE_USER } from "../constant/constant"
import { NEW_USER } from "../constant/constant"


const initialState = {
    account: {
    },
    navigator: {
        home: true,
        profile: false,
        liked: false
    }
}

const navigatorReducer = (state = initialState, action) => {
    switch (action.type) {
        
        case NEW_USER:
            return state

        case SAVE_USER:
            state.account = action.data.user[0]
            return state

        case BOOKMARK_POST:
            (state.account.saved.includes(action.data.id)) ?
                state.account.saved = (state.account.saved.filter(e => e !== action.data.id)) :
                (state.account.saved.push(action.data.id))
            return state

        case SWITCH_TO_HOME:
            state.navigator.home = action.data.home
            state.navigator.profile = action.data.profile
            state.navigator.liked = action.data.liked
            return state

        case SWITCH_TO_PROFILE:
            state.navigator.home = action.data.home
            state.navigator.profile = action.data.profile
            state.navigator.liked = action.data.liked
            return state

        case SWITCH_TO_LIKED:
            state.navigator.home = action.data.home
            state.navigator.profile = action.data.profile
            state.navigator.liked = action.data.liked
            return state

        default:
            return state
    }
}

export default navigatorReducer