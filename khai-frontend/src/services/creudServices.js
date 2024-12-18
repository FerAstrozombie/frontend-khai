import axios from "axios";

let url = "http://localhost:8081/importacion/saveimport"
let urlExpo = "http://localhost:8081/exportacion/saveexport"

export const createOperation = async (bl, condition, product, shipper, consignee, weigth, rate, origen, buque, arrival, expo) => {
    if(expo){
        let body = {
            bl,
            condition,
            product,
            shipper,
            consignee,
            weigth,
            rate,
            origen,
            buque,
            arrival
        };
        const respuesta = await axios.post(urlExpo, body)
        return respuesta;
    }else{
        let body = {
            bl,
            condition,
            product,
            shipper,
            consignee,
            weigth,
            rate,
            origen,
            buque,
            arrival
        };
        const respuesta = await axios.post(url, body)
        return respuesta;
    }    
};

export const deleteOperation = async (id) => {
    let urlDeleteImpo = `http://localhost:8081/importacion/deleteimport/${id}`
    const respuesta = await axios.delete(urlDeleteImpo, id)
    return respuesta;
};

export const deleteOperationExpo = async (id) => {  
    let urlDeleteExpo = `http://localhost:8081/exportacion/deleteexport/${id}`
    const respuesta = await axios.delete(urlDeleteExpo, id)
    return respuesta;
};