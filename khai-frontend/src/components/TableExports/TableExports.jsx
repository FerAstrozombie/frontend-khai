import { useState, useEffect } from "react";
/* import "./styles.css"; */
import SideMenu from "../SideMenu/SideMenu";
import { FcFullTrash, FcBinoculars, FcDataConfiguration } from "react-icons/fc";
import { deleteOperationExpo } from "../../services/creudServices";
import Swal from 'sweetalert2'

const TableExports = () => {

    let url = "http://localhost:8081/exportacion"

    useEffect(() => {
        getData(url);
    }, [url])

    const [data, setData] = useState([]);
    const [expo, setExpo] = useState(false);
    const [search, setSearch] = useState("");

    const getData = () => {
        fetch(url).then(response => response.json())
            .then(data => {
                if (data.exports) {
                    const dataExports = data.exports;
                    setData(dataExports);
                    setExpo(true);
                } else {
                    console.log(data);
                }
            })
            .catch(error => console.log(error))
    }

    const searcher = (e) => {
        setSearch(e.target.value);
    }

    let results = []
    if (!search) {
        results = data;
    } else {
        results = data.filter((dato) =>
            dato.bl.toLowerCase().includes(search.toLocaleLowerCase())
        )
    }

    const handleClick = id => event => {
        deleteOperationExpo(id);
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
                    <SideMenu impo={false} expo={expo} />
                    <div className="advertencia">
                        <h4 className="advertenciaTexto">No hay operaciones cargadas aun</h4>
                        <h4 className="advertenciaTexto">Quieres cargar una? Haz click en el siguiente link o presiona el boton ´+´</h4>
                        <a href="/saveexport">Agregar operacion</a>
                    </div>
                </div>
                :
                <div
                    className="tabla"
                    key={data.id}>
                    <SideMenu expo={expo} />
                    <div className="buscador">
                        <FcBinoculars className="binoculares"/>
                        <input onChange={searcher} value={search} className="input" type="text" placeholder="Buscar por nro Bl"/>
                    </div>
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
                            </tr>
                        </thead>
                        <tbody>
                            {
                                results.map(p => (
                                    <tr key={p.id}>
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
                                            <FcDataConfiguration className="trash" />
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

export default TableExports