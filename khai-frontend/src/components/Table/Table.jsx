import { useState, useEffect } from "react";
import "./styles.css";

const Table = () => {

    let url = "http://localhost:8081/"
    
    useEffect( () =>{
        getData(url);
    },[url])

    const [data, setData] = useState([]); 

    const getData = () => {
        fetch(url).then(response => response.json())
        .then(data => {
        const dataImports = data.imports;
        setData(dataImports);
        })
        .catch(error => console.log(error))
    }
        
    return (
        <>
            <div>
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
            {/* {
                data.map( p =>(  
                    <div key={p.id}>
                    </div>                      
                ))
            } */}
            </div>
        </>
    )
}

export default Table