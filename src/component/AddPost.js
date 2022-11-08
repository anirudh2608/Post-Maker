import React, { useState, memo } from 'react'

import PostFormContainer from '../container/PostFormContainer';

import "../public/style/AddPost.css"



function AddPost() {
    const [flag, setFlag] = useState(false)
    

    return (
        <div className='Add_Post'>
            <h6 onClick={() => setFlag(true)}>
                New Post
            </h6>
            {flag && <PostFormContainer setFlag={setFlag} />}
        </div>
    )
}

export default memo(AddPost)