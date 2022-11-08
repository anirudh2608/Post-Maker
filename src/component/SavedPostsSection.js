import React, {useEffect, useState } from 'react'

import PostContainer from '../container/PostContainer'

import "../public/style/LikedPostsSection.css"

function SavedPostsSection(props) {
  
  const posts = props.data.reducer.posts
  const users = props.data.reducer.users

  const [myPost, setMypost] = useState([])
  
  const loggedInUserSaved = props.user.saved



  useEffect(() => {
    loggedInUserSaved.map((b) => (
      posts.map((post) => (
        (post.id === b) && setMypost((prevState) => [...prevState, post])
      ))
    ))
  }, [posts,loggedInUserSaved])


  return (
    <div>

      <div className="Liked_Post">
        <span className="material-symbols-outlined">
          bookmark
        </span>
        <h3>Your Saved Posts</h3>
      </div>

      {myPost.map((post) => (
        <PostContainer key={post.id} user={users[users.findIndex(i => i.userId === post.userId)]} post={post} />

      ))}

    </div>
  )
}

export default SavedPostsSection