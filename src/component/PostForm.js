import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';
import { nanoid } from "nanoid"

import getCurrentTime from '../modules/getCurrentTime';
import getCurrentDate from '../modules/getCurrentDate';

import "../public/style/PostForm.css"



function PostForm({ setFlag, addPostHandler, data }) {

    const headingInput = useRef()
    const [heading, setHeading] = useState('')
    const [text, setText] = useState('')
    const [flagHeadingError, setFlagHeadingError] = useState(false)
    const [flagTextError, setFlagTextError] = useState(false)


    const focusInput = () => {
        headingInput.current.focus()
    }

    useEffect(() => {
        focusInput()
    }, [])


    const validatePost = () => {
        if (heading.length <= 2) {
            setFlagHeadingError(true)
        } else if (text.length <= 0) {
            setFlagTextError(true)
        } else {
            newPost()

            addPostHandler({
                newPost: {
                    id: postId,
                    title: heading,
                    text: text,
                    time: getCurrentTime(),
                    date: getCurrentDate(),
                    userId: data.userId
                }
            });

            setFlag(false)
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const postId = nanoid()

    const newPost = async () => {
        const post = {
            id: postId,
            title: heading,
            text: text,
            time: getCurrentTime(),
            date: getCurrentDate(),
            userId: data.userId,
            likes: [],
            edit: false
        }
        await axios.post("https://6347147304a6d45757a0196e.mockapi.io/anirudh/posts", post)
            .catch(err => {
                console.log(err.message)
            })
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Heading</label>
            <input type="text" placeholder='Enter Heading' ref={headingInput} value={heading} onChange={(e) => { setHeading(e.target.value) }} />
            {flagHeadingError && <p>Heading should contain atleast 3 characters.</p>}
            <label>Text</label>
            <textarea placeholder='Enter Note text' value={text} onChange={(e) => setText(e.target.value)} />
            {flagTextError && <p>Enter about the post.</p>}
            <button className='form_button' onClick={() => {
                
                validatePost()

            }}>Save Notes</button>
        </form>
    )
}

export default PostForm