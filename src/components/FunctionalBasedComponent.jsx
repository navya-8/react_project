import React from "react";
import PropExample from "../PropExample";

const Child = () => {
    return (
        <p>Child component</p>
    )
}

function FunctionalBasedComponent() {

    // const parentComponentHandler = () => {
    //     console.log('Hello from parent component');
    // }
    const getValueFromChildComponent= (value)=>{
        console.log(value);
    }

    return (
        <div>
            <Child />
            functional based components
            {/* <PropExample parentComponentHandler={parentComponentHandler} flag={true} data="data as props " /> */}
            <PropExample getValueFromChildComponent={getValueFromChildComponent}/>
        </div>
    )
}

export default FunctionalBasedComponent;