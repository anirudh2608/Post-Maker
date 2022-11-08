import React from 'react'

import "../public/style/Header.css"



function Header({ handleSearch, handleFlag, homeHandler, profiletHandler, likedHandler }) {
  
  return (
    <div className='Navbar'>
      <h1>Thoughts</h1>
      <input type="search" onChange={(e) => { handleSearch(e.target.value) }} placeholder='Search....' />
      <div className="navigator">

        <span id={"home".toString()} onClick={() => {
          homeHandler({
            home: true,
            profile: false,
            liked: false
          })
          document.getElementById("home").classList.add("active-navigator")
          document.getElementById("liked").classList.remove("active-navigator")
          document.getElementById("profile").classList.remove("active-navigator")
          handleFlag(prevState => !prevState)
        }} className="material-symbols-outlined active-navigator">
          home
        </span>

        <span id={"profile".toString()} onClick={() => {
          profiletHandler({
            home: false,
            profile: true,
            liked: false
          })
          document.getElementById("profile").classList.add("active-navigator")
          document.getElementById("liked").classList.remove("active-navigator")
          document.getElementById("home").classList.remove("active-navigator")
          handleFlag(prevState => !prevState)
        }} className="material-symbols-outlined">
          account_circle
        </span>

        <span id={"liked".toString()} onClick={() => {
          likedHandler({
            home: false,
            profile: false,
            liked: true
          })
          document.getElementById("liked").classList.add("active-navigator")
          document.getElementById("profile").classList.remove("active-navigator")
          document.getElementById("home").classList.remove("active-navigator")
          handleFlag(prevState => !prevState)
        }} className="material-symbols-outlined">
          bookmark
        </span>

      </div>
    </div>
  )
}

export default Header