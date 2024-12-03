import axios from "axios";

let url = "http://localhost:8081/saveimport"

export const createOperation = async (bl, condition, product, shipper, consignee, weigth, rate, origen, buque, arrival) => {
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
};