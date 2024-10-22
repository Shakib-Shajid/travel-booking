
const Card = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto" id="card" data-aos="fade-up">
                <div className="my-5 lg:my-20">
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full  md:w-3/4 mx-auto"> */}
                    <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center w-[90%] mx-auto">
                        <div className="card bg-gradient-to-br from-blue-300 to-green-300 w-[22rem] md:w-80 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-extrabold text-gray-800 font-roboto ">Precios más bajos exclusivos para clientes de Smart Tour</h2>
                                <p className="font-open_sans">Ahorra en trenes, hoteles, paquetes de vuelo + hotel y actividades en cualquier fecha y destino.</p>
                            </div>
                        </div>

                        <div className="card bg-gradient-to-br from-blue-300 to-green-300 w-[22rem] md:w-80 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-extrabold text-gray-800 font-roboto ">Tarifa Smart Tour para todos</h2>
                                <p className="font-open_sans">Los descuentos de Smart Tour también se aplican a todos los acompañantes de tus reservas, con un máximo de
                                    8 personas en total. <br /> Hasta 3 personas que tú elijas podrán disfrutar de los descuentos exclusivos de Smart Tour cuando la reserva no sea para ti.</p>
                            </div>
                        </div>

                        <div className="card bg-gradient-to-br from-blue-300 to-green-300 w-[22rem] md:w-80 mx-auto">
                            <div className="card-body">
                                <h2 className="card-title text-xl font-extrabold text-gray-800 font-roboto ">Asistencia personalizada </h2>
                                <p className="font-open_sans">Ofrecemos asistencia las 24 horas del día, los 7 días de la semana para resolver cualquier consulta durante su viaje.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card;