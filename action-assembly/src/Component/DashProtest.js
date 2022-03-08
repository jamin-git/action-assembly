import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../CSS/DashProtest.css'

function DashProtest(props) {
    let [desc, setDesc] = useState()
    let [date, setDate] = useState()
    let [addr, setAddr] = useState()

    useEffect(() => {
        const getInfo = async () => {
            let details = await axios.get(`http://localhost:8080/protest/findOne/${props.name}`)
            setDesc(details.data.description)
            setDate(details.data.date)
            setAddr(details.data.address)
        }

        getInfo()
    },[props.name])

    const cancel = async () => {
        await axios.post("http://localhost:8080/account/removeprotest/", {
            email: localStorage.getItem('email'),
            protest: props.name
        })

        window.location.reload()
    }
    return (
        <div className="protest-element2">
            <h3>{props.name}</h3>
            <label>description: {desc}</label>
            <label>location: {addr}</label>
            <label>date: {date}</label>
            <button className="cancel-button" onClick={cancel}>cancel</button>
        </div>
    )
}

export default DashProtest