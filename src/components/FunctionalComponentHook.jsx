import React from "react"
import UseFetch from "../CustomHook";


function FunctionalComponentHook() {
    const { data } = UseFetch('https://jsonplaceholder.typicode.com/posts');
    console.log(data);
    return (
        <div>
        </div>
    );
}

export default FunctionalComponentHook;
