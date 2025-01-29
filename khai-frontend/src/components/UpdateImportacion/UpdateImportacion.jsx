import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate, useLocation } from "react-router-dom";
import { getById, updateOperation } from "../../services/creudServices";
import { FcApproval } from "react-icons/fc";
/* import "./styles.css"; */
import { useEffect, useState } from "react";

const UpdateImportacion = () => {

    const [data, setData] = useState({});
    const [NuevoBl, setNuevoBl] = useState("");
    const [NuevaCondition, setNuevaCondition] = useState("");
    const [NuevoPeso, setNuevoPeso] = useState("");
    const [NuevoOrigen, setNuevoOrigen] = useState("");
    const [NuevoBuque, setNuevoBuque] = useState("");
    const [NuevoProducto, setNuevoProducto] = useState("");
    const [NuevoArrival, setNuevoArrival] = useState("");
    const [NuevoShipper, setNuevoShipper] = useState("");
    const [NuevoConsignee, setNuevoConsignee] = useState("");
    const [NuevaTarifa, setNuevaTarifa] = useState("");
    console.log(data);
    

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const data = await getById(location.state.id);
        const dataReal = data.data.import.message
        setData(dataReal)
    };

    const registerSchema = Yup.object().shape(
        {
            bl: Yup.string()
                .min(5, "Nro de bl demsiado corto")
                .required("Bl requerido"),
            condition: Yup.string()
                .required("Condicion requerida"),
            product: Yup.string()
                .required("Producto requerido"),
            shipper: Yup.string()
                .required("Exportador requerido"),
            consignee: Yup.string()
                .required("Consignatario requerido"),
            weigth: Yup.string()
                .required("Peso requerido"),
            rate: Yup.string()
                .required("Tarifa requerida"),
            origen: Yup.string()
                .required("Origen requerido"),
            buque: Yup.string()
                .required("Buque requerido"),
            arrival: Yup.string()
                .required("Fecha requerida"),
        }
    )

    return (
        <Formik
            enableReinitialize={true}
            initialValues={data}
            validationSchema={registerSchema}
            onSubmit={async (values) => {

                const body = {
                    bl: values.bl,
                    condition: values.condition,
                    product: values.product,
                    shipper: values.shipper,
                    consignee: values.consignee,
                    weigth: values.weigth,
                    rate: values.rate,
                    origen: values.origen,
                    buque: values.buque,
                    arrival: values.arrival
                }
                const id = location.state.id
                const response = await updateOperation(id, body);
                console.log(response);
                if (response.status === 400) alert(JSON.stringify(response.data))
                navigate("/importacion");
            }}
        >
            {({ isSubmitting, errors, touched }) => (
                <div>
                    <Form className="formLogin">
                        <div className="cabecera">
                            <h2>Importacion maritima (nueva)</h2>
                            <button
                                type="submit"
                                className="boton"
                            >
                                <FcApproval className="tilde" />
                            </button>
                        </div>
                        <div className="datosPadre">
                            <h3>Datos del embarque</h3>
                            <div className="datosEmbarque">
                                <div className="inputField">
                                    <label htmlFor="bl">Bl</label>
                                    <Field id="bl" type="text" name="bl" placeholder="Bl" className="input" value={NuevoBl} onChange={e => setNuevoBl(e.target.value)} />
                                    {
                                        errors.bl && touched.bl &&
                                        (
                                            <ErrorMessage name='bl' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="condition">Condicion</label>
                                    <Field id="condition" type="text" name="condition" placeholder="Condicion" className="input" value={NuevaCondition} onChange={e => setNuevaCondition(e.target.value)} />
                                    {
                                        errors.condition && touched.condition &&
                                        (
                                            <ErrorMessage name='condition' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="weigth">Peso</label>
                                    <Field id="weigth" type="text" name="weigth" placeholder="Peso" className="input" value={NuevoPeso} onChange={e => setNuevoPeso(e.target.value)} />
                                    {
                                        errors.weigth && touched.weigth &&
                                        (
                                            <ErrorMessage name='weigth' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="origen">Origen</label>
                                    <Field id="origen" type="text" name="origen" placeholder="Origen" className="input" value={NuevoOrigen} onChange={e => setNuevoOrigen(e.target.value)} />
                                    {
                                        errors.origen && touched.origen &&
                                        (
                                            <ErrorMessage name='origen' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="buque">Buque</label>
                                    <Field id="buque" type="text" name="buque" placeholder="Buque" className="input" value={NuevoBuque} onChange={e => setNuevoBuque(e.target.value)} />
                                    {
                                        errors.buque && touched.buque &&
                                        (
                                            <ErrorMessage name='buque' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="product">Producto</label>
                                    <Field id="product" type="text" name="product" placeholder="Producto" className="input" value={NuevoProducto} onChange={e => setNuevoProducto(e.target.value)} />
                                    {
                                        errors.product && touched.product &&
                                        (
                                            <ErrorMessage name='product' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="arrival">Fecha de arribo</label>
                                    <Field id="arrival" type="text" name="arrival" placeholder="Fecha de arribo" className="input" value={NuevoArrival} onChange={e => setNuevoArrival(e.target.value)} />
                                    {
                                        errors.arrival && touched.arrival &&
                                        (
                                            <ErrorMessage name='arrival' component="div" className="error" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="datosPadre">
                            <h3>Datos de la operacion</h3>
                            <div className="datosEmbarque">
                                <div className="inputField">
                                    <label htmlFor="shipper">Shipper</label>
                                    <Field id="shipper" type="text" name="shipper" placeholder="Shipper" className="input" value={NuevoShipper} onChange={e => setNuevoShipper(e.target.value)} />
                                    {
                                        errors.shipper && touched.shipper &&
                                        (
                                            <ErrorMessage name='shipper' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="consignee">Consignee</label>
                                    <Field id="consignee" type="text" name="consignee" placeholder="Consignee" className="input" value={NuevoConsignee} onChange={e => setNuevoConsignee(e.target.value)} />
                                    {
                                        errors.consignee && touched.consignee &&
                                        (
                                            <ErrorMessage name='consignee' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="rate">Tarifa</label>
                                    <Field id="rate" type="text" name="rate" placeholder="Tarifa" className="input" value={NuevaTarifa} onChange={e => setNuevaTarifa(e.target.value)} />
                                    {
                                        (
                                            <ErrorMessage name='rate' component="div" className="error" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {isSubmitting ? (<p>Modificando...</p>) : null}
                        <button
                            type="submit"
                            className="boton"
                        >
                            <FcApproval className="tilde" />
                        </button>
                    </Form>
                </div>

            )}
        </Formik>
    )
}

export default UpdateImportacion;