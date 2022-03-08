import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Column from '../Component/Column'
import ContactCard from '../Component/ContactCard'
import '../CSS/About.css'
import team from '../resources/Team Page.svg'

function About() {
    return (
        <div>
            <Navbar />
            <Column 
            title="About" 
            content="Every great project has an even better team behind it. Here's the team behind Action Assembly!"/>
            <div className="cards">
                <ContactCard className="contact-card" name="Jinwoo Park" description="Third year computer science student" email="jpark955@gatech.edu" role="Project Manager"/>
                <ContactCard className="contact-card" name="Jacob Amin" description="Third year computational media student" email="jamin7@gatech.edu" role="Developer"/>
                <ContactCard className="contact-card" name="Duc Le" description="Third year computer science student" email="ducle147@gmail.com" role="Developer"/>
                <ContactCard className="contact-card" name="Michelle Lee" description="Second year computer science student" email="mlee692@gatech.edu" role="Developer"/>
                <ContactCard className="contact-card" name="Josh Samuel" description="First year computer science student" email="jsamuel36@gatech.edu" role="Developer"/>
            </div>
            <Footer />
        </div>
    )
}

export default About
