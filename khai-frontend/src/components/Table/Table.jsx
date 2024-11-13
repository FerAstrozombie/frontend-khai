import UseFetch from "../UseFetch/useFetch";

const Table = () => {

    let url = "http://localhost:8081/"

    const data = UseFetch(url);
    const dataImports = data.imports;
    console.log(dataImports);
    
    return (
        <>
            <div>
            {
                dataImports.map( p =>(  
                    <div key={p.id}>
                        <h5>{p.bl}</h5>
                        <p>{p.origen}</p>
                        <p>{p.producto}</p>
                    </div>                      
                ))
            }
            </div>
        </>
    )
}

export default Table