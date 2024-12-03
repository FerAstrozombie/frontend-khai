import { useState, useEffect } from "react";
import "./styles.css";
import SideMenu from "../SideMenu/SideMenu";

const Table = () => {

    let url = "http://localhost:8081/"
    
    useEffect( () =>{
        getData(url);
    },[url])

    const [data, setData] = useState([]);
    const [impo, setImpo] = useState(false); 

    const getData = () => {
        fetch(url).then(response => response.json())
        .then(data => {
            if(data.imports){
                const dataImports = data.imports;
                setData(dataImports);
                setImpo(true);
            }if(data.exports){
                const dataExports = data.exports;
                setData(dataExports);
            }            
        })
        .catch(error => console.log(error))
    }

    return (
        <>
            { data.length ===0 ?
                <h4>Error de conexion</h4>
                :
                <div
                className="tabla"
                key={data.id}>
                <SideMenu impo={impo} />
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
                            data.map(p => (
                                <tr key={p.id}>
                                    <td>{p.bl}</td>
                                    <td>{p.origen}</td>
                                    <td>{p.product}</td>
                                    <td>{p.arrival}</td>
                                    <td>{p.condition}</td>
                                    <td>{p.buque}</td>
                                    <td>{p.shipper}</td>
                                    <td>{p.consignee}</td>
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

export default Table