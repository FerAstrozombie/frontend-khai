import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { Operacion } from "../../models/operacion.clas";
import { createOperation } from "../../services/creudServices";
import { FcApproval } from "react-icons/fc";
import "./styles.css";

const Exportacion = () => {

    let operation = new Operacion;

    const navigate = useNavigate();

    const initialValues = {
        bl: "",
        condition: "",
        product: "",
        shipper: "",
        consignee: "",
        weigth: "",
        rate: "",
        origen: "",
        buque: "",
        arrival: "",
    }

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
            initialValues={initialValues}
            validationSchema={registerSchema}
            onSubmit={async (values) => {
                operation.bl = values.bl;
                operation.condition = values.condition;
                operation.product = values.product;
                operation.shipper = values.shipper;
                operation.consignee = values.consignee;
                operation.weigth = values.weigth;
                operation.rate = values.rate;
                operation.origen = values.origen;
                operation.buque = values.buque;
                operation.arrival = values.arrival;
                operation.expo = true
                const response = await createOperation(operation.bl, operation.condition, operation.product, operation.shipper, operation.consignee, operation.weigth, operation.rate, operation.origen, operation.buque, operation.arrival, operation.expo);
                if (response.status === 400) alert(JSON.stringify(response.data))
                navigate("/exportacion");
            }}
        >
            {({ errors, touched, isSubmitting }) => (
                <div>
                    <Form className="formLogin">
                        <div className="cabecera">
                            <h2>Exportacion maritima (nueva)</h2>
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
                                    <Field id="bl" type="text" name="bl" placeholder="Bl" className="input" />
                                    {
                                        errors.bl && touched.bl &&
                                        (
                                            <ErrorMessage name='bl' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="condition">Condicion</label>
                                    <Field id="condition" type="text" name="condition" placeholder="Condicion" className="input" />
                                    {
                                        errors.condition && touched.condition &&
                                        (
                                            <ErrorMessage name='condition' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="weigth">Peso</label>
                                    <Field id="weigth" type="text" name="weigth" placeholder="Peso" className="input" />
                                    {
                                        errors.weigth && touched.weigth &&
                                        (
                                            <ErrorMessage name='weigth' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="origen">Origen</label>
                                    <Field id="origen" type="text" name="origen" placeholder="Origen" className="input" />
                                    {
                                        errors.origen && touched.origen &&
                                        (
                                            <ErrorMessage name='origen' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="buque">Buque</label>
                                    <Field id="buque" type="text" name="buque" placeholder="Buque" className="input" />
                                    {
                                        errors.buque && touched.buque &&
                                        (
                                            <ErrorMessage name='buque' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="product">Producto</label>
                                    <Field id="product" type="text" name="product" placeholder="Producto" className="input" />
                                    {
                                        errors.product && touched.product &&
                                        (
                                            <ErrorMessage name='product' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="arrival">Fecha de arribo</label>
                                    <Field id="arrival" type="text" name="arrival" placeholder="Fecha de arribo" className="input" />
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
                                    <Field id="shipper" type="text" name="shipper" placeholder="Shipper" className="input" />
                                    {
                                        errors.shipper && touched.shipper &&
                                        (
                                            <ErrorMessage name='shipper' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="consignee">Consignee</label>
                                    <Field id="consignee" type="text" name="consignee" placeholder="Consignee" className="input" />
                                    {
                                        errors.consignee && touched.consignee &&
                                        (
                                            <ErrorMessage name='consignee' component="div" className="error" />
                                        )
                                    }
                                </div>
                                <div className="inputField">
                                    <label htmlFor="rate">Tarifa</label>
                                    <Field id="rate" type="text" name="rate" placeholder="Tarifa" className="input" />
                                    {
                                        errors.rate && touched.rate &&
                                        (
                                            <ErrorMessage name='rate' component="div" className="error" />
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                        {isSubmitting ? (<p>Agregando...</p>) : null}
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

export default Exportacion;