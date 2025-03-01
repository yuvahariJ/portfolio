import React from "react";
import "./index.css"
import { Link } from "react-router-dom";
import { useTheme } from "../../Context/ThemeProvider/Theme";

const LinkTo = ({ ...props }) => {
    const { href, label } = props;
    const {theme}=useTheme()
    return (
        <Link className={`link-style ${theme?"dark-theme":"light-theme"} `}
            to={href}>
            {label}
        </Link>
    )
};

export default LinkTo;