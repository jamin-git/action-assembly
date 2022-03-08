import React, { useEffect, useState } from 'react'
import jin_pic from "../resources/jin.jpg"
import jacob_pic from "../resources/jacob.jpg"
import duc_pic from "../resources/duc.jpg"
import michelle_pic from "../resources/michelle.jpg"
import josh_pic from "../resources/josh.jpeg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import '../CSS/ContactCard.css'
import { set } from 'react-hook-form'

function ContactCard(props) {
    let [pic, setPic] = useState()
    let [leftMargin, setLeftMargin] = useState({marginLeft: "0px"})
    useEffect(() => {
        switch(props.name) {
            case "Jinwoo Park" : 
                setPic(jin_pic)
                setLeftMargin({marginLeft: "-30%"})
                break
            case "Jacob Amin" : 
                setPic(jacob_pic)
                setLeftMargin({transform: "scale(2.2)", marginLeft:"25px", marginTop: "-17px"})
                break
            case "Duc Le" : 
                setPic(duc_pic)
                setLeftMargin({transform: "scale(1.25)", marginLeft: "10%", marginTop: "10%"})
                break
            case "Michelle Lee" : 
                setPic(michelle_pic)
                break
            case "Josh Samuel" : 
                setPic(josh_pic)
                break
            default:
        }
    }, [props.name])
    return(
        <div className="card">
            <div className="img-crop">
                <img src={pic} alt={`profile of ${props.name}`} className="profile-pic" style={leftMargin}></img>
            </div>
            <div className="profile-info">
                <h2>{props.name}</h2>
                <label className="role">{props.role}</label>
                <label className="description">{props.description}</label>
                <a className="email-link" href = {`mailto:${props.email}`}>
                    <FontAwesomeIcon icon={faEnvelope} className="env"/>
                    <label className="email">{props.email}</label>
                </a>
            </div>
        </div>
    )
}

export default ContactCard