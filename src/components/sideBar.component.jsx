import React, {useState,useRef } from "react";
const SideBar = () => {
    const [toggle,setToggle] = useState(false)
    const inputRef = useRef(null);
    const onButtonClick = (toggle) => {
        
        inputRef.current.click();
      console.log('clicked')
      setToggle(!toggle)
      console.log(toggle)
    };
    
    return (
        <div className="paddingtw">
          <div className="paddingtw">Ask</div>
          <button ref={inputRef} onClick = {()=>onButtonClick(toggle)}>
              Trackboard     
          </button>
          {toggle && (<div>
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
        </div>)}
          <div className="paddingtw">Nudges</div>
        </div>
        )
}



export default SideBar