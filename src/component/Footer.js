import React, { memo } from 'react'

import "../public/style/Footer.css"

function Footer({ handleFlag, homeHandler, profiletHandler, likedHandler }) {
    return (
        <div className='footer'>

            <span id={"footer-home".toString()} onClick={() => {
                homeHandler({
                    home: true,
                    profile: false,
                    liked: false
                })
                document.getElementById("footer-home").classList.add("footer-active-navigator")
                document.getElementById("footer-liked").classList.remove("footer-active-navigator")
                document.getElementById("footer-profile").classList.remove("footer-active-navigator")
                handleFlag(prevState => !prevState)
            }} className="material-symbols-outlined footer-active-navigator">
                home
            </span>

            <span id={"footer-profile".toString()} onClick={() => {
                profiletHandler({
                    home: false,
                    profile: true,
                    liked: false
                })
                document.getElementById("footer-profile").classList.add("footer-active-navigator")
                document.getElementById("footer-liked").classList.remove("footer-active-navigator")
                document.getElementById("footer-home").classList.remove("footer-active-navigator")
                handleFlag(prevState => !prevState)
            }} className="material-symbols-outlined">
                account_circle
            </span>

            <span id={"footer-liked".toString()} onClick={() => {
                likedHandler({
                    home: false,
                    profile: false,
                    liked: true
                })
                document.getElementById("footer-liked").classList.add("footer-active-navigator")
                document.getElementById("footer-profile").classList.remove("footer-active-navigator")
                document.getElementById("footer-home").classList.remove("footer-active-navigator")
                handleFlag(prevState => !prevState)
            }} className="material-symbols-outlined">
                bookmark
            </span>

        </div>
    )
}

export default memo(Footer)