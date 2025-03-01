import "./App.css";
import { useTheme } from "./Context/ThemeProvider/Theme";
import Header from "./Pages/Header";
import LoadingPage from "./Components/Loading";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";

function App() {
  const { theme } = useTheme();
  return (
    <>
      
    <div id="main-div" className={ theme?"dark-theme": "light-theme" }>
    OM
    <Header/>
    <Routes>
      
      <Route path="/home" element={<Home/> } />
    
    </Routes>
    {/* <LoadingPage></LoadingPage> */}
      </div>
    </>
  );
}

export default App;
