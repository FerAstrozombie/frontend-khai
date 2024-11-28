import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Table from "./components/Table/Table";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import FormImport from "./components/FormImport/FormImports";

function App() {

  return (
    <Router>
      <NavBar />
      <Menu />
      <Routes>
        <Route exact path="/importacion" element={ <Table /> } />
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/saveimport" element={ <FormImport />} />
      </Routes>
    </Router>
  )
}

export default App
