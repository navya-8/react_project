import React from "react";

const PropExample = (props) => {
    console.log();
    // const { flag, data, parentComponentHandler } = props;
    const {getValueFromChildComponent} = props;
    const handleClick =()=>{
        const count = 5;
        getValueFromChildComponent(count+1)
    }

    return (
        <div>
            {/* {
                flag ? data : "flag is false "
            }
            - Prop example component
            <button onClick={parentComponentHandler}>Click</button> */}
            <hr />
            <button onClick={handleClick}>click</button>
        </div>
    )
}
export default PropExample;