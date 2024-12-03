export class Operacion {
    bl = "";
    condition = "";
    product = "";
    shipper = "";
    consignee = "";
    weigth = "";
    rate = "";
    origen = "";
    buque = "";
    arrival = "";

    constructor(bl, condition, product, shipper, consignee, weigth, rate, origen, buque, arrival){
        this.bl = bl;
        this.condition = condition;
        this.product = product;
        this.shipper = shipper;
        this.consignee = consignee;
        this.weigth = weigth;
        this.rate = rate;
        this.origen = origen;
        this.buque = buque;
        this.arrival = arrival;
    }
}