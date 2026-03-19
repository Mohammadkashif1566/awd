import React from 'react';
import { useState } from 'react';




function Count() {

    const [counter, setCounter]  = useState(15)

    const addValue = () => {
    setCounter(counter + 1)


    }

    const removeValue = () => {
    setCounter(counter - 1)
    }
    return ( 
        <>
            <div className="flex h-screen items-center justify-center">
            <div>
                <h1 className=' text-2xl font-bold'>Count : {counter}</h1>
                <br />
                <button onClick={addValue}
                >Add value</button> 
                <br />
                <button
                onClick={removeValue}
                >remove value </button>
            </div>
            </div>

            
        </>
     );
}

export default Count;