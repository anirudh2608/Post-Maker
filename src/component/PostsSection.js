import { useEffect, useState } from 'react'

import PostContainer from '../container/PostContainer'

function PostsSection({ search, data }) {

    const [post, setPost] = useState([])

    const posts = data.reducer.posts
    const users = data.reducer.users

    useEffect(() => {
        setPost(posts.filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())))
    }, [posts, search])


    return (
        <>

            {post.map((p) => (

                <PostContainer key={p.id} user={users[users.findIndex(i => i.userId === p.userId)]} post={p} />

            ))}
        </>

    )
}

export default PostsSection