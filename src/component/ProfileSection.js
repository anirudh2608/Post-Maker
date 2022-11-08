import React from 'react'

import PostContainer from '../container/PostContainer'

import "../public/style/ProfileSection.css"



function ProfileSection(props) {

  const user = props.user
  const posts = props.data

  return (
    <div className='Profile_container'>
      <div className='Profile_name'>
        <h4>{user.name[0]}</h4>
        <h1>{user.name}</h1>
      </div>
      <h2>Your Posts</h2>
      {posts.map((post) => (
        (post) && <PostContainer key={post.id} user={user} post={post} />
      ))}

    </div>
  )
}

export default ProfileSection









