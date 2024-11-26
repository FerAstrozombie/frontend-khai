import "./styles.css";

const Home = () => {

    return (
        <>
            <section className="seccion">
                <div className="organizacion">
                    <div className="cotizador">
                        <h3>Cotizacion</h3>
                        <form action="" className="formCotizador">
                            <div className="spanCotizador">
                                <span className="spanTamaño">Cotizacion</span>
                                <input type="text" className="inputCotizador" />
                            </div>
                            <div className="spanCotizador">
                                <span className="spanTamaño">Operacion</span>
                                <input type="text" className="inputCotizador" />
                            </div>
                            <div className="spanCotizador">
                                <span className="spanTamaño">Contenedor</span>
                                <input type="text" className="inputCotizador" />
                            </div>
                        </form>
                    </div>
                    <div>
                        <h3>Informes</h3>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home;