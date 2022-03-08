import React, { useEffect, useState, useRef } from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
// import Column from '../Component/Column'
import ProtestInstance from '../Component/ProtestInstance'
import axios from 'axios'
import CreateProtest from '../Component/createProtest'
import '../CSS/Protests.css'
import dashpic from '../resources/dashboard pic.png'

function Protests() {
    const searchName = useRef()

    let [protestNameList, setProtestNameList] = useState([])
    let [protestList, setProtestList] = useState([])

    useEffect(() => {
        async function getProtests() {
            let protestNameListNew = await axios.get(`http://localhost:8080/user/${localStorage.getItem('email')}`)
            setProtestNameList(protestNameListNew)
            let output = await axios.get('http://localhost:8080/protest/findAll')
            let allProtests = output.data
            setProtestList(allProtests.map((ele) => <li className="protest-element"><ProtestInstance visible={false} protest={ele} names={protestNameListNew.data.protests}/></li>))
        }

        getProtests();
    },[])

    let search = async () => {
        if (searchName.current.value === "") {
            window.location.reload()
        } else {
            let output = await axios.get(`http://localhost:8080/protest/findOne/${searchName.current.value}`)
            console.log(output.data)
            if (output.data) {
                setProtestList(<li className="protest-element"><ProtestInstance visible={false} names={protestNameList.data.protests} protest={output.data}/></li>)
            } else {
                setProtestList(<h2 style={{color: "white"}}>No search results</h2>)
            }
        }
    }

    return (
        <div className="content-body">
            <Navbar />
            <h1>Current Protests</ h1>
            <div className="parent">
                <div className="child protest-list">
                    <form>
                        <input className="searchbox" ref={searchName} type="text" placeholder="search for a protest by name"/>
                        <button className="searchbutton" onClick={search} type="button">Search</button>
                    </ form>
                    <ul>
                        {protestList} 
                    </ul>
                </div>
                <div className="child">
                    <CreateProtest className="create-box"/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Protests
