const FAQ = () => {
    return (
        <div className="p-4 font-open_sans" data-aos="zoom-in">
            <div className="max-w-7xl mx-auto w-[90%] lg:w-2/3 bg-gradient-to-r from-green-300 to-blue-300 rounded-2xl p-4 ">
                <h3 className="collapse p-4 text-xl font-bold font-roboto">Preguntas frecuentes sobre Smart Tour </h3>
                <div className="collapse collapse-arrow  border-b-2  ">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-medium ">¿Cuánto dura la suscripción de Smart Tour?</div>
                    <div className="collapse-content text-sm">
                        <p>La suscripción de Smart Tour dura 12 meses y en el caso de estar disfrutando del mes de prueba
                            gratis, la suscripción dura en total 13 meses (12 + 1 gratis).</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  border-b-2  ">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-medium ">¿Cuántas veces puedo usar los descuentos de Smart Tour?</div>
                    <div className="collapse-content text-sm">
                        <p>Si eres cliente de Smart Tour puedes beneficiarte de los descuentos exclusivos de la tarifa Smart
                            Tour en hoteles, paquetes de vuelo + hotel y actividades durante todo el año de forma ilimitada.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  border-b-2  ">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-medium ">¿Puedo reservar viajes para otras personas?</div>
                    <div className="collapse-content text-sm">
                        <p>Sí, es uno de los beneficios del programa.<br />
                            Cuando la reserva sea para ti, los descuentos exclusivos de la tarifa Smart Tour se aplicarán tanto a
                            ti como a tus acompañantes, con un máximo de 8 personas en total.<br />
                            También puedes compartir los descuentos de Smart Tour con hasta 3 personas más cuando tú no
                            viajes.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  border-b-2  ">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-medium ">¿Qué tengo que hacer para renovar mi suscripción?</div>
                    <div className="collapse-content text-sm">
                        <p>No tienes que hacer nada. La renovación se actualiza automáticamente al finalizar el periodo
                            suscrito. Si lo prefieres, también puedes desactivar la renovación automática cuando quieras.</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow  border-b-2  ">
                    <input type="checkbox" name="my-accordion-2" />
                    <div className="collapse-title text-sm font-medium ">¿Puedo cancelar la suscripción a Smart Tour?</div>
                    <div className="collapse-content text-sm">
                        <p>En el caso de estar en período de prueba gratuita, puedes cancelar tu suscripción a Smart Tour en
                            cualquier momento y la cuota de la suscripción no se cobrará. <br />
                            En el caso de no estar en período de prueba gratuita, puedes cancelar la renovación automática de
                            tu suscripción a Smart Tour en cualquier momento desde tu área privada, pero el importe ya
                            abonado de la cuota no es reembolsable.</p>
                    </div>
                </div>
            </div>
            
            <p className="text-center my-6 md:my-14 lg:my-20 p-4 md:p-0 w-[90%] md:w-full mx-auto">El programa Smart Tour es una suscripción con renovación anual automática. <br className="hidden md:grid" /> Consulta los <span className="text-[#F2384B]">Términos y condiciones</span>.</p>
        </div>
    );
};

export default FAQ;