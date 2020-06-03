import React, { Fragment, useState } from "react";

import data from "../data"

const MainPage = () => {
    const [value,setValue] = useState({
        ask: 'what do you what to ask'
    });
    const handleChange = event => {
        event.preventDefault();
        const { value, name } = event.target;
        console.log(name);
        setValue({ ...value, [name]: value });
      };
    return (
        <div className="MainPage">
    <input className="inputBox" name= "ask" value={value.ask} onChange={handleChange}/>
     <p className="text">
         {data}
     </p>
        </div>
        
    )
}
export default MainPage