import React from "react";
import "./index.css";


const Button = ({...props } ) => {
    const { label,onClick} = props;
    return (
        <button
            {...onClick && ({
                onClick: () => onClick()
            })}
            className="button-main"
        >
            {label}
        </button>
    )
}

export default Button;
