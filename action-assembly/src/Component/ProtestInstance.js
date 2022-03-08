import React, { useEffect, useState } from 'react'
// import {useState, useEffect} from 'react'
import '../CSS/ProtestInstance.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'

function ProtestInstance(props) {
    let [loggedIn] = useState(localStorage.getItem('email') !== null)
    let [attending, setAttending] = useState(false)

    useEffect(() => {
        const attendStatus = async () => {
            if (!loggedIn) {
                setAttending(true)
            } else {
                if (props.names !== undefined && props.names.indexOf(props.protest.protestName) === -1) {
                    setAttending(false)
                } else {
                    setAttending(true)
                }
            }
        }
        attendStatus()
    }, [loggedIn, props.names, props.protest.protestName])

    const addProtest = () => {
        axios.post('http://localhost:8080/account/addprotest', {
            email: localStorage.getItem('email'),
            protest: props.protest.protestName
        })
        setAttending(true)
    }
    
    return (
        <div className="protest">
            <h4 className="title">{props.protest.protestName}</h4>
            <div className="entry">location: {props.protest.address}</div>
            <div className="entry">date: {props.protest.date}</div>
            <div className="entry">details: {props.protest.description}</div>
            <button className="will-attend" style={attending? {display:"none"}:{display:""}} onClick={addProtest}>I will attend</button>
            <FontAwesomeIcon icon={faCheck} style={loggedIn && attending? {display:""}:{display:"none"}} className="check"/>
            <label className="attending" style={loggedIn && attending? {display:""}:{display:"none"}}>Attending!</label>
        </div>
    )
}

export default ProtestInstance