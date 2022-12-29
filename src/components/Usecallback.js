import React from 'react'
import { useState } from 'react'

export default function Usecallback() {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)


    const Increment = () => {
        setCount(count + 1)
    }

    const Increment2 = () => {
        setCount2(count2 + 5)
    }
    const Reset = () => {
        setCount(0)
        setCount2(0)
    }

    const buttonShow = () => {



        return (
            <div className='Height'>
                <h4 className="text-primary"><u>React useCallBack Hook</u></h4>
                <h3>{count}</h3>
                <button type="button" onClick={Increment}>Click to increment</button>
                <h3>{count2}</h3>
                <button type="button" onClick={Increment2}>Click to increment</button>
                <br />
                <button type="button" onClick={Reset}>Click to Reset</button>






            </div>

        )
    }
