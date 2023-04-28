import React, { useEffect, useState } from 'react'

const UseEffect = () => {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0);
    useEffect(() => {
        alert(count)
    }, [count])

    return (
        <div>
            <button onClick={setCount(count + 1)}>First</button>
            <button onClick={setValue(value + 1)}>Second</button>
        </div>
    )
}

export default UseEffect
