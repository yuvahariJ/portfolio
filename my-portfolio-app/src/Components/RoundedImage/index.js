import React from "react";
import "./index.css";
import { useTheme } from "../../Context/ThemeProvider/Theme";
import myImage from "./ProfilePhoto.jpeg";

const RoundedImage = (props) => {
  const { imageSrc } = props;
  const { theme } = useTheme();
  return (
    <div
      className={
        theme ? "rounded-image-wrapper-dark" : "rounded-image-wrapper-light"
      }
    >
      <img src={imageSrc} className="image-style" />
      
    </div>
    
  );
};

export default RoundedImage;
