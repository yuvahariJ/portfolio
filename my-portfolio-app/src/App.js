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
        <Routes basename="/portfolio">
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        {/* <LoadingPage></LoadingPage> */}
      </div>
    </>
  );
}

export default App;
