import React from "react";
import { useTheme } from "../../Context/ThemeProvider/Theme";
import PageWrapper from "../../Components/PageWrapper";
import "./index.css"

const Home = () => {
  const { theme } = useTheme();
  return (
    <PageWrapper>
          <div className={theme ? "dark-theme" : "light-theme"}>
              <div className="content-main">
                  
                  <h3>SoftWare Developer</h3>
                 <h1 className="greetings">
                  Hello I'm
                  </h1>
                  <h1 className="name-content">
                     Yuvahari . J 
                  </h1>
                  <h3>
                  Highly motivated software developer with 1.5+ years of experience specializing in full-stack development and modern web technologies. Proficient in building scalable and maintainable applications using React, Next.js, and Java.  Skilled in integrating advanced tools 
                  </h3>
              </div>
              
          </div>
    </PageWrapper>
  );
};

export default Home;
