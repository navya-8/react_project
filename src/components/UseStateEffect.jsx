import React, { useState, useEffect, useContext, useReducer, useRef } from "react";
import { Context } from "../App";

const initialState = {
    flag: false
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_BUTTON':
            console.log(state, action);
            return {
                ...state,
                flag: !state.flag
            };
        default:
            return state;
    }
}

function UseStateEffect() {
    const [count, setCount] = useState(0)
    const [flag, setFlag] = useState(false)

    console.log(count);

    const handleClick = () => {
        setCount(count + 1);
    }

    useEffect(() => {
        console.log('effect is called only once on page load');
    }, []);     //componentdidmount in class component

    useEffect(() => {
        if (count === 5) {
            setFlag(true);
        }
    }, [count]);        //componentdidupdate

    useEffect(() => {
        return () => {
            console.log('unmounted');
        }
    })      //componentdidwillunmount 

    const getValueFromContext = useContext(Context)
    console.log(getValueFromContext);

    const [state, dispatch] = useReducer(reducer, initialState)
    console.log(state);

    const inputRef = useRef(null);
    console.log(inputRef);
    // useEffect(() => {
    //     inputRef.current.focus()
    // },[])

    const handleFocus = () => {
        inputRef.current.focus()
    }

    return (
        <div>
            <button onClick={handleClick}>Click</button>
            Counter value is {count}
            {
                flag && <p>Hello World</p>
            }
            <hr />
            <button style={{ backgroundColor: getValueFromContext }} >Click</button>
            <hr />
            <button onClick={() => dispatch({ type: 'TOGGLE_BUTTON' })}>Toggle</button>
            <hr />
            <input ref={inputRef} name="name" placeholder="Name" type="text" />
            <button onClick={handleFocus}>Click</button>
        </div>
    )
}

export default UseStateEffect;