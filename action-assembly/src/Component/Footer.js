import React from 'react'
import '../CSS/Footer.css'

// Footer object that sticks to the bottom of the page

var date = new Date();
date = date.getFullYear();

function Footer() {
    return (
        <footer>
            <p>GT Web Dev Action Assembly - Copyright © <span>{ date }</span></p>
        </footer>
    )
}

export default Footer