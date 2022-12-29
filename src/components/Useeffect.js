import React, { useState, useEffect } from 'react'
import './Style.css'


const Useeffect = () => {

    const [testState, setTestState] = useState("")
    const [testState2, setTestState2] = useState({
        name: "John",
        age: 30

    })


    const Trigger = () => {
        setTestState("")
        setTestState2({
            ...testState2,
            age: 40
        });


    }


    // useEffect Replacemnet of 
    // ComponentDidMount
    // ComponentDidUpdate 
    // useEffect = () => {
    useEffect(() => {

        console.log(testState2)


    }, [testState2])




    return (
        <div className='Height'>
            <h4 className="text-primary"><u>React useEffect Hook</u></h4>
            <button type="button" onClick={Trigger}>Open console browser & Click!</button>




        </div>
    )
}

export default Useeffect;
