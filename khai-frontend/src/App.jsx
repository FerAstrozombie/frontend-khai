import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table/Table";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";

function App() {

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route exact path="/importacion" element={ <Table /> } />
        <Route exact path="/" element={ <Home /> } />
      </Routes>
    </Router>
  )
}

export default App
