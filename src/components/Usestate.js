import React, { useState } from 'react'
import './Style.css'


const Usestate = () => {

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



    return (
        <div className='Height'>
            <h4 className="text-primary"><u>React useState Hook</u></h4>
            <h3>{testState2.name}</h3>
            <h3>{testState2.age}</h3>

            <button type="button" onClick={Trigger}>Click to change Age</button>

            {/* <h3>{testState2.name}</h3>
            <h3>{testState2.age}</h3> */}


        </div>
    )
}

export default Usestate;
