import React, { useEffect, useState } from 'react'
import {useRef} from 'react'
import '../CSS/BoxCenteredCreateProtest.css'

function BoxCenteredCreateProtest(props) {
  let [showCreate, setShowCreate] = useState(false)
  const protestName = useRef();
  const description = useRef();
  const hashtag = useRef();
  const time = useRef();
  const address = useRef();

  useEffect( ()=> {
    if (localStorage.getItem('email')) {
      setShowCreate(true)
    } else {
      setShowCreate(false)
    }
  },[])

  const liftVals = (event) => {
    if (!protestName.current.value || !description.current.value || !hashtag.current.value || !time.current.value || !address.current.value) {
      alert("cannot have empty fields when creating a protest")
    } else {
      props.handleCreatingProtest(protestName.current.value, description.current.value, hashtag.current.value, time.current.value, address.current.value)
    }
  }

  return (
      <div className="centered2" style={showCreate? {display: ""}:{display: "none"}}>
        <h1>Create Protest</h1>
        <form>
          <label className="field-name">
            <p>Protest Name</p>
            <input id = 'input'ref={protestName} type="text"></input>
          </label>
          <label className="field-name">
            <p>Description</p>
            <input id = 'input'ref={description} type="text"></input>
          </label>
          <label className="field-name">
            <p>Hashtag</p>
            <input id = 'input'ref={hashtag} type="text"></input>
          </label>
          <label className="field-name">
            <p>Time</p>
            <input id = 'input'ref={time} type="text"></input>
          </label>
          <label className="field-name">
            <p>Address</p>
            <input id = 'input'ref={address} type="text"></input>
          </label>

        </form>
        <button onClick={ liftVals } className="create-button">Create</button>
      </div>
  )
}

export default BoxCenteredCreateProtest
