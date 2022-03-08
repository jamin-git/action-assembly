import React from 'react'
import '../CSS/Column.css'

// A column that at most covers 1/2 the screen in width, and any amount in height

function Column(props) {
    return (
        <div className="col">
            <h1> { props.title } </h1>
            <p> { props.content } </p>
            {/* <img> {props.image} </img> */}
        </div>
    )
}

export default Column