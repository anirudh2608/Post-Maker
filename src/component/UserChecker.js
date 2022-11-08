import React, { useState } from 'react'

import AppContainer from '../container/AppContainer';
import NewUserContainer from '../container/NewUserContainer';

function UserChecker() {
  
  const [flag, setFlag] = useState(false)
  const retrieveUser = JSON.parse(localStorage.getItem("user"))

  return (
    <>
      {!flag && ((!retrieveUser) ?
        <NewUserContainer flagHandler={setFlag} /> :
        <AppContainer />)
      }
      {flag && <AppContainer />}
    </>
  )
}

export default UserChecker