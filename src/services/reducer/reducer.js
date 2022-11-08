import { ADD_POST } from "../constant/constant"
import { DELETE_POST } from "../constant/constant"
import { EDIT_POST } from "../constant/constant"
import { LIKE_POST } from "../constant/constant"
import { BOOKMARK_POST } from "../constant/constant"
import { NEW_USER } from "../constant/constant"
import { FETCH_DATA_REQUEST } from "../constant/constant"
import { FETCH_DATA_SUCCESS } from "../constant/constant"
import { FETCH_DATA_FAILURE } from "../constant/constant"

const intitialState = {
    loading: false,
    error: "",
    users: [],
    posts: []
}


const reducer = (state = intitialState, action) => {
    switch (action.type) {

        case FETCH_DATA_SUCCESS:
            state.users = action.payload[0]
            state.posts = action.payload[1]
            return {
                ...state,
                posts: action.payload[1],
                users: action.payload[0]
            }

        case FETCH_DATA_FAILURE:
            return state


        case NEW_USER:
            (state.users[state.users.length]) = action.data[0]
            return state

        case ADD_POST:
            const postItem = action.data.newPost
            const newPost = {
                id: postItem.id,
                title: postItem.title,
                text: postItem.text,
                time: postItem.time,
                date: postItem.date,
                edit: false,
                userId: postItem.userId,
                likes: []
            };

            return {
                ...state,
                posts: [...state.posts, newPost]
            }

        case DELETE_POST:
            return {
                ...state,
                posts:
                    (state.posts.filter((post) => post.id !== action.data.id))
            }

        case EDIT_POST:
            state.posts.map(post => {
                if (post.id === action.data.id) {
                    post.title = action.data.title
                    post.text = action.data.text
                    post.edit = true
                    return state
                }
            })

        case LIKE_POST:
            state.posts.map(post => {
                (post.id === action.data.id) && (
                    (post.likes.includes(action.data.userId)) ?
                        (post.likes = post.likes.filter(e => e !== action.data.userId)) :
                        post.likes.push(action.data.userId)
                )
            })
            return state

        case BOOKMARK_POST:
            state.users.map(user => {
                (user.userId === action.data.id)
                    && (
                        (user.saved.includes(action.data.id)) ?
                            user.saved = (user.saved.filter(e => e !== action.data.id)) :
                            (user.saved.push(action.data.id))
                    )
            })
            return state

        default:
            return state
    }
}

export default reducer