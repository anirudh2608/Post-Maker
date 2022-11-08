import React, { useState } from 'react'
import axios from 'axios'

import "../public/style/PostsSection.css"


function Post(props) {

    const profile = props.data.navigatorReducer.navigator.profile
    const loggedInUser = props.data.navigatorReducer.account.userId
    const loggedInUserData = props.data.navigatorReducer.account
    const user = props.user
    const post = props.post

    const [flagEdit, setFlagEdit] = useState(false)
    const [title, setTitle] = useState(post.title)
    const [text, setText] = useState(post.text)
    const [likes, setLikes] = useState(post.likes)
    const [bookmarks, setBookmarks] = useState(loggedInUserData.saved)
    const [flagHeadingError, setFlagHeadingError] = useState(false)
    const [flagTextError, setFlagTextError] = useState(false)

    let likedClass = [
        "material-symbols-outlined"
    ]

    let likeCheck

    if (likes.includes(loggedInUser)) {
        likeCheck = "liked"
        likedClass.push(likeCheck)
    } else {
        likeCheck = ""
        likedClass.push(likeCheck)
    }


    let bookmarkedClass = [
        "material-symbols-outlined"
    ]
    let bookmarkCheck


    if (bookmarks.includes(post.id)) {
        bookmarkCheck = "bookmarked"
        bookmarkedClass.push(bookmarkCheck)
    } else {
        bookmarkCheck = ""
        bookmarkedClass.push(bookmarkCheck)
    }


    const validatePost = () => {
        if (title.length <= 2) {
            setFlagHeadingError(true)
        } else if (text.length <= 0) {
            setFlagTextError(true)
        } else {

            updatePost()

            props.editPostHandler({
                id: post.id,
                title: title,
                text: text
            })

            setFlagEdit(false)
            setFlagHeadingError(false)
            setFlagTextError(false)

        }
    }

    const deletePost = async () => {
        await axios.delete(`https://6347147304a6d45757a0196e.mockapi.io/anirudh/posts/${post.api_id}`)
            .catch(err => {
                console.log(err.message)
            })
    }

    const updatePost = async () => {
        const updatedValues = {
            title: title,
            text: text,
            edit: true
        }
        await axios.put(`https://6347147304a6d45757a0196e.mockapi.io/anirudh/posts/${post.api_id}`, updatedValues)
            .catch(err => {
                console.log(err.message)
            })
    }

    const likePost = async () => {
        if (likes.includes(loggedInUser)) {
            let updatedValue = { likes: likes.filter(e => e !== loggedInUser) }
            await axios.put(`https://6347147304a6d45757a0196e.mockapi.io/anirudh/posts/${post.api_id}`, updatedValue)
                .catch(err => {
                    console.log(err.message)
                })
        } else {
            await setLikes(prevState => [...prevState, loggedInUser])
            let updatedValue = { likes }
            await axios.put(`https://6347147304a6d45757a0196e.mockapi.io/anirudh/posts/${post.api_id}`, updatedValue)
                .catch(err => {
                    console.log(err.message)
                })
        }
    }

    return (
        <div className='Post_container'>
            <div className='Post_content'>
                <div className='Post_profile_edit' >

                    <div className='Post_profile_image'>
                        <h5>{user.name[0]}</h5>
                        <h4>{user.name}</h4>
                    </div>

                    {profile && <span onClick={() => {
                        setFlagEdit(true);
                    }} className="material-symbols-outlined">
                        edit_note
                    </span>}

                </div>

                {flagEdit ? <input type="text" placeholder={title} value={title} onChange={(e) => setTitle(e.target.value)} /> : <h1>{post.title}</h1>}
                {flagHeadingError && <p style={{ "color": "red" }}>Heading should contain atleast 3 characters.</p>}

                {flagEdit ? <textarea placeholder={text} value={text} onChange={(e) => setText(e.target.value)} /> : <p>{post.text}</p>}
                {flagTextError && <p style={{ "color": "red" }}>Enter about the post.</p>}

            </div>
            <div className='Post_footer' >

                <div style={{ display: "flex", alignItems: "center" }}>
                    {!flagEdit && <span onClick={() => {
                        likePost()
                        likes.includes(loggedInUser) &&
                            setLikes(likes.filter(e => e !== loggedInUser))

                        props.likePostHandler({
                            id: post.id,
                            userId: loggedInUser
                        })

                    }} className={likedClass.join(" ")} >
                        favorite
                    </span>}
                    {!flagEdit && <p style={{ marginLeft: "5px" }}>{likes.length}</p>}
                </div>

                <div className='Post_functions'>

                    {flagEdit && <button onClick={() => {

                        validatePost()

                    }} >Save</button>}

                    <div>
                        {!flagEdit && profile && <span onClick={() => {
                            deletePost()
                            props.deletePostHandler({
                                id: post.id
                            })
                        }
                        } className="material-symbols-outlined marked">
                            delete
                        </span>}

                        {!flagEdit && <span onClick={() => {

                            bookmarks.includes(post.id)
                                ? setBookmarks(bookmarks.filter(e => e !== post.id))
                                : setBookmarks(prevState => [...prevState, post.id])

                            props.bookmarkPostHandler({
                                id: post.id
                            })

                        }} className={bookmarkedClass.join(" ")}>
                            bookmark
                        </span>}
                    </div>

                </div>
            </div>

            {!flagEdit && <div className="Post_time">
                <p><i>{post.time}</i></p>
                <p><i>{post.date}</i></p>
                {(post.edit) && <p>Edited**</p>}
            </div>}

        </div>
    )
}

export default Post