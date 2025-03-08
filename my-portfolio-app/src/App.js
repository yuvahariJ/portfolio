import "./App.css";
import { useTheme } from "./Context/ThemeProvider/Theme";
import Header from "./Pages/Header";
import LoadingPage from "./Components/Loading";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";

function App() {
  const { theme } = useTheme();
  return (
    <>
      <div id="main-div" className={theme ? "dark-theme" : "light-theme"}>
        OM
        <Header />
        <Routes>
          <Route path="/yuvahariJ/portfolio/home" element={<Home />} />
          <Route path="/yuvahariJ/portfolio/resume" element={<Resume />} />
          <Route path="/yuvahariJ/portfolio/contact" element={<Contact />} />
        </Routes>
        {/* <LoadingPage></LoadingPage> */}
      </div>
    </>
  );
}

export default App;
