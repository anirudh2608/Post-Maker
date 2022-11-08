import React, { useEffect, useState } from 'react';

import FooterContainer from './container/FooterContainer';
import HeaderContainer from './container/HeaderContainer';
import AddPost from './component/AddPost';
import ProfileSectionContainer from './container/ProfileSectionContainer';
import SavedPostsContainer from './container/SavedPostsContainer';
import PostSectionContainer from './container/PostsSectionsContainer';

import './App.css';



function App(props) {

  const [search, setSearch] = useState('')
  const [flag, setFlag] = useState(false)
  const [home, setHome] = useState(props.data.navigatorReducer.navigator.home)
  const [profile, setProfile] = useState(props.data.navigatorReducer.navigator.profile)
  const [liked, setLiked] = useState(props.data.navigatorReducer.navigator.liked)

  const retrieveUser = JSON.parse(localStorage.getItem("user"))
  const loggedInUser = props.data.navigatorReducer.account


  useEffect(() => {
    props.fetchData()
    if (retrieveUser) {
      props.retrieveUserHandler({ type: "SAVE_NOTES", user: retrieveUser })
    }
  }, [])


  useEffect(() => {
    localStorage.setItem("user",
      JSON.stringify([loggedInUser]))
  }, [loggedInUser])


  useEffect(() => {
    setHome(props.data.navigatorReducer.navigator.home)
    setProfile(props.data.navigatorReducer.navigator.profile)
    setLiked(props.data.navigatorReducer.navigator.liked)
  }, [flag])


  return (

    <>    <div className="App">

      <nav>
        <HeaderContainer handleSearch={setSearch} handleFlag={setFlag} />
      </nav>


      <section>
        {home && <PostSectionContainer search={search} />}
        {profile && <ProfileSectionContainer />}
        {liked && <SavedPostsContainer />}
        {profile && <AddPost />}
      </section>



      <footer>
        <FooterContainer handleFlag={setFlag} />
      </footer>

    </div>
    </>

  );
}

export default App;
