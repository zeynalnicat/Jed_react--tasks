import { useState } from "react"

function Count(){
    const [count , setCount] = useState(0)
    return <>
    <h1>Count : {count}</h1>
    <button onClick={()=> setCount(count+1)}>+</button>
    <button onClick={()=> count>0? setCount(count-1) : 0}>-</button>
    </>
}

export default Count;