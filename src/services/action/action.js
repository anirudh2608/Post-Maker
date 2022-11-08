import axios from "axios"

import { ADD_POST } from "../constant/constant"
import { DELETE_POST } from "../constant/constant"
import { EDIT_POST } from "../constant/constant"
import { LIKE_POST } from "../constant/constant"
import { BOOKMARK_POST } from "../constant/constant"
import { SWITCH_TO_HOME } from "../constant/constant"
import { SWITCH_TO_PROFILE } from "../constant/constant"
import { SWITCH_TO_LIKED } from "../constant/constant"
import { SAVE_USER } from "../constant/constant"
import { NEW_USER } from "../constant/constant"
import { FETCH_DATA_REQUEST } from "../constant/constant"
import { FETCH_DATA_SUCCESS } from "../constant/constant"
import { FETCH_DATA_FAILURE } from "../constant/constant"



export const add_post = (data) => {
    return {
        type: ADD_POST,
        data
    }
}

export const edit_post = (data) => {
    return {
        type: EDIT_POST,
        data: data
    }
}

export const delete_post = (data) => {
    return {
        type: DELETE_POST,
        data
    }
}

export const like_post = (data) => {
    return {
        type: LIKE_POST,
        data
    }
}

export const bookmark_post = (data) => {
    return {
        type: BOOKMARK_POST,
        data
    }
}

export const switch_to_home = (data) => {
    return {
        type: SWITCH_TO_HOME,
        data
    }
}

export const switch_to_profile = (data) => {
    return {
        type: SWITCH_TO_PROFILE,
        data
    }
}

export const switch_to_liked = (data) => {
    return {
        type: SWITCH_TO_LIKED,
        data
    }
}

export const save_user = (data) => {
    return {
        type: SAVE_USER,
        data
    }
}

export const new_user = (data) => {
    return {
        type: NEW_USER,
        data
    }
}


export const fetch_data_request = () => {
    return {
        type: FETCH_DATA_REQUEST
    }
}


export const fetch_data_success = (data) => {
    return {
        type: FETCH_DATA_SUCCESS,
        payload: data
    }
}


export const fetch_data_failure = (error) => {
    return {
        type: FETCH_DATA_FAILURE,
        payload: error
    }
}

export const fetchData = () => {
    return (dispatch) => {
        const usersAPI = "https://6347147304a6d45757a0196e.mockapi.io/anirudh/users"
        const postsAPI = "https://6347147304a6d45757a0196e.mockapi.io/anirudh/posts"
        const usersData = axios.get(usersAPI)
        const postsData = axios.get(postsAPI)
        dispatch(fetch_data_request)
        axios.all([usersData, postsData])
            .then(
                axios.spread((...data) => {
                    dispatch(fetch_data_success(([data[0].data, data[1].data])))
                })
            ).catch(error => {
                const errMsg = error.message
                dispatch(fetch_data_failure(errMsg))
            })
    }
}