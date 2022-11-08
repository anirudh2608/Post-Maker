import React, { useState } from 'react'
import axios from 'axios'
import { nanoid } from "nanoid"

import capitalize from '../modules/capitalize'

import "../public/style/NewUser.css"



function NewUser(props) {

    const [name, setName] = useState('')
    const [apiError, setApiError] = useState('')
    const [flagApiError, setFlagApiError] = useState(false)
    const [error, setError] = useState('')
    const [flagError, setFlagError] = useState(false)

    const apiData = {
        userId: nanoid(),
        name: capitalize(name)
    }

    const localStorageData = [{
        userId: apiData.userId,
        name: capitalize(name),
        saved: []
    }]



    const userNameValidation = async () => {
        if (!(isNaN(name[0]))) {
            setError("First character should be String")
            setFlagError(true)
        } else if (name.length < 3) {
            setError("User Name should contain atleast three characters")
            setFlagError(true)
        } else {
           await insertNewUser()
            props.newUserHandler(localStorageData)
            insertUser()
            props.flagHandler(true)
        }
    }


    const insertNewUser = async () => {
        await axios.post("https://6347147304a6d45757a0196e.mockapi.io/anirudh/users", apiData)
            .catch((error) => {
                setApiError(error.message)
                setFlagApiError(true)
                console.log(error.message)
            })
    }

    const insertUser = () => {
        console.log(localStorageData)
        localStorage.setItem("user",
            JSON.stringify(localStorageData))
    }


    if (flagApiError) {

        return (<p>{apiError}</p>)

    } else {

        return (
            <div className='newUser'>
                <div className='newUser_container'>
                    <h3>New User?....</h3>
                    <h4>Enter your Name</h4>
                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
                    {flagError && <p style={{ "color": "red" }}>{error}</p>}
                    <button onClick={() => {
                        userNameValidation()

                    }}>Submit</button>
                </div>
            </div>
        )
    }
}

export default NewUser