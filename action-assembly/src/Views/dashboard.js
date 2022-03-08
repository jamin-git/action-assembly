import React from 'react'
import {useEffect, useState} from 'react'
import Navbar from '../Component/Navbar'
import axios from 'axios'
import Footer from '../Component/Footer'
import DashProtest from '../Component/DashProtest'
import '../CSS/dashboard.css'

function Dashboard(props) {
    let [protestList, setProtestList] = useState([])

    useEffect( () => {
        async function getProtests(email) {
            let output = await axios.get(`http://localhost:8080/user/${email}`)
            if (output.data.protests.length !== 0) {
                setProtestList(output.data.protests.map((ele) => <li className="protest-element"><DashProtest name={ele}/></li>))
            } else {
                setProtestList(<h3 style={{color: "white"}}>You have not signed up for any protests</h3>)
            }
        }

        getProtests(localStorage.getItem('email'))
    }, [])

    return(
        <div>
            <Navbar />
            <h1 className="user">{localStorage.getItem('name')}'s Dashboard</h1>
            <div className="protest-list">
                <h2 style={{marginLeft: "40px", color: "white"}}>Attending Protests</h2>
                <ul>
                    {protestList}
                </ul>
            </div>
            <Footer />
        </div>
    )
}

export default Dashboard