import React from "react";
import "./index.css";


const ToggleButton = ({...props}) => {
    const { onChange } = props;
    return (
        <>
            <div className="container">
                <input type="checkbox" id="checkButton" onChange={onChange} />
                <label for="checkButton" className="button"></label>
            </div>
        </>
    
    );
};

export default ToggleButton;