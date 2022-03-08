import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import Column from '../Component/Column'
import '../CSS/home.css'
import glass from "../resources/glassmorphic picture.png"
import fist from "../resources/whitecirclefist.svg"

export const Home = (props) => {
    return (
        <div>
            <Navbar />
            <div className="two-cols">
                <div className="left">
                    <Column
                    title="Action Assembly"
                    content="Looking to spend your 
                        Saturday overthrowing the 
                        patriarchy? Or maybe use 
                        spring break to march for 
                        legislative change? Well look no further!
                        Action Assembly is the best platform to organize protests
                        for any cause that you are passionate about 
                        So grab your friends, your family and grab your ambition, and get ready to 
                        discover dissent like you 
                        never have before."/>
                
                </div>
                <div className="right">
                    <img alt="person protesting" src= {glass}/>
                </div>

            </div>
            <Footer />
        </div>
    )
}
