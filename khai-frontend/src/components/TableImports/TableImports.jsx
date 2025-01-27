import { useState, useEffect } from "react";
import "./styles.css";
import SideMenu from "../SideMenu/SideMenu";
import { FcFullTrash } from "react-icons/fc";
import { deleteOperation } from "../../services/creudServices";
import Swal from 'sweetalert2'

const TableImports = () => {

    let url = "http://localhost:8081/importacion"

    useEffect(() => {
        getData(url);
    }, [url])

    const [data, setData] = useState([]);
    const [impo, setImpo] = useState(false);
    const [expo, setExpo] = useState(false);
    const [search, setSearch] = useState("");

    const getData = () => {
        fetch(url).then(response => response.json())
            .then(data => {
                if (data.imports) {
                    const dataImports = data.imports;
                    setData(dataImports);
                    setImpo(true);
                    setExpo(false);
                } if (data.exports) {
                    const dataExports = data.exports;
                    setData(dataExports);
                }
            })
            .catch(error => console.log(error))
    }

    const searcher = (e) =>{
        setSearch(e.target.value);       
    }

    let results = []
    if(!search){
        results = data;
    }else{
        results = data.filter((dato) =>           
            dato.bl.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    const handleClick = id => event => {
        deleteOperation(id);
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
        setTimeout(() => {
            window.location.reload()
        }, 2000);
    }

    return (
        <>
            {data.length === 0 ?
                <div>
                    <SideMenu impo={true} expo={expo} />
                    <div className="advertencia">
                        <h4 className="advertenciaTexto">No hay operaciones cargadas aun</h4>
                        <h4 className="advertenciaTexto">Quieres cargar una? Haz click en el siguiente link o presiona el boton ´+´</h4>
                        <a href="/saveimport">Agregar operacion</a>
                    </div>
                </div>
                :
                <div
                    className="tabla"
                >
                    <SideMenu impo={impo} />
                    <input onChange={searcher} value={search} className="input" type="text" placeholder="Buscar por nro Bl"/>
                    <table>
                        <thead>
                            <tr>
                                <th>BL</th>
                                <th>Origen</th>
                                <th>Producto</th>
                                <th>E.T.A.</th>
                                <th>Condicion</th>
                                <th>Buque</th>
                                <th>Cliente</th>
                                <th>Consignatario</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map(p => (
                                    <tr key={p._id}>
                                        <td>{p.bl}</td>
                                        <td>{p.origen}</td>
                                        <td>{p.product}</td>
                                        <td>{p.arrival}</td>
                                        <td>{p.condition}</td>
                                        <td>{p.buque}</td>
                                        <td>{p.shipper}</td>
                                        <td>{p.consignee}</td>
                                        <td>
                                            <FcFullTrash className="trash" onClick={(e) => handleClick(p._id)(e)} />
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            }
        </>
    )
}

export default TableImports