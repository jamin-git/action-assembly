import React from 'react'
import BoxCenteredCreateProtest from '../Component/BoxCenteredCreateProtest'
import axios from 'axios'

function CreateProtest() {
    // let [description, setDescription, ] = useState('sample');
    // let [hashtag, setHashtag] = useState('sample');
    // let [time, setTime] = useState('sample');
    // let [address,setAddress] = useState('sample');

    const creatingProtest = async (protestNameVal, descriptionVal, hashtagVal, timeVal, addressVal ) => {
        await axios.post('http://localhost:8080/protest/createProtest', {
            protestName: protestNameVal,
            description: descriptionVal,
            hashtag : hashtagVal,
            date : timeVal,
            address : addressVal
        });

        window.location.reload()
        // console.log(createProtestOutput.data)
        // if (createProtestOutput.data.protestName !== undefined) {
        //   setProtestName(createProtestOutput.data.protestName);
        //   setDescription(createProtestOutput.data.description);
        //   setHashtag(createProtestOutput.data.hashtag);
        //   setTime(createProtestOutput.data.time);
        //   setAddress(createProtestOutput.data.address);
        // } else {
        //     setProtestName('fail');
        //     setDescription('fail');
        //     setHashtag('fail');
        //     setTime('fail');
        //     setAddress('fail');
        // }
    
        // console.log(createProtestOutput);
    }

    return (
        <div>
            <BoxCenteredCreateProtest handleCreatingProtest={creatingProtest}/>
        </div>
    )
}

export default CreateProtest