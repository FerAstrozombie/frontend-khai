import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import Importacion from "./components/importacion/importacion";
import Exportacion from "./components/Exportacion/Exportacion"
import TableImports from "./components/TableImports/TableImports";
import TableExports from "./components/TableExports/TableExports";
import UpdateImportacion from "./components/UpdateImportacion/UpdateImportacion";

function App() {

  return (
    <Router>
      <NavBar />
      <Menu />
      <Routes>
        <Route exact path="/importacion" element={ <TableImports /> } />
        <Route exact path="/exportacion" element={ <TableExports /> } />
        <Route exact path="/" element={ <Home /> } />
        <Route exact path="/saveimport" element={ <Importacion />} />
        <Route exact path="/saveexport" element={ <Exportacion />} />
        <Route exact path="/importUpdate" element={ <UpdateImportacion />} />
      </Routes>
    </Router>
  )
}

export default App
