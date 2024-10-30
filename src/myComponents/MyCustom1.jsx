import { useState } from "react"

export default function MyCustom1() {
    let [count, setCount] = useState(0)
    let handleAdd = () => {
        let newCount = count + 1
        setCount(newCount)
    }

    let handleDecrease = () => {
        let newCount = count -1 
        setCount(newCount)
    }

    return (
        <div>
            <h3>React Core Consept 2</h3>
            <p>This done by my custom module .</p>
            <p> the number : {count}</p>
            <button onClick={handleAdd}>Increase</button>
            <button onClick={handleDecrease}>decrease</button>
        </div>
    )
}