import { useState, useEffect } from "react"


const UseFetch = (url) => {

    useEffect( () =>{
        getData(url);
    },[url])

    const [data, setData] = useState([]);

    async function getData (url) {
        try {
            const resp = await fetch(url);
            const data = await resp.json();
            setData(data);
        } catch (error) {
            console.log(error);
        }
    }

    return data

}

export default UseFetch