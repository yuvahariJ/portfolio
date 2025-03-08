import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Pages/Header";
import Home from "./Pages/Home";
import Resume from "./Pages/Resume";
import Contact from "./Pages/Contact";
import { useTheme } from "./Context/ThemeProvider/Theme";

function App() {
  const { theme } = useTheme();
  return (
    <Router basename="/portfolio"> {/* 👈 Add basename here */}
      <div id="main-div" className={theme ? "dark-theme" : "light-theme"}>
        OM
        <Header />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
