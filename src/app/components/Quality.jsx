import Image from "next/image";

const Quality = () => {
    return (
        <div className="my-10" data-aos="fade-down">
            <h2 className="text-4xl text-center font-bold text-black my-5">Unirse a Smart es muy sencillo</h2>
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full lg:w-2/3 mx-auto md:w-fit"> */}
                <div className="flex flex-col md:flex-row flex-wrap gap-4 justify-center w-full md:w-11/12 lg:w-3/4 mx-auto">
                
                    {/* card 1 */}
                    <div className="card mx-auto w-72 md:w-80 bg-gradient-to-b from-green-400 to-blue-400 shadow-xl border-2 border-gray-200 ">
                        <div className="h-full pt-5 absolute top-0">
                            <div className="rounded-r-full border-2 h-16 w-16 flex items-center justify-center shadow-2xl shadow-slate-100">
                                <span className="text-2xl font-semibold text-black">1</span>
                            </div>
                        </div>
                        <div className=" flex  justify-center mt-16 ">
                            <Image src="/card_1.png" className="h-10 w-16  items-center" alt="" width="300" height="300" />
                        </div>
                        <div className="card-body text-center text-sm">
                            <p>Busca un vuelo, un tren, un hotel o una actividad en Atrápalo.</p>
                        </div>
                    </div>


                    {/* card 2 */}
                    <div className="card mx-auto w-72 md:w-80 bg-gradient-to-b from-green-400 to-blue-400 shadow-xl border-2 border-gray-200 ">
                        <div className="h-full pt-5 absolute top-0">
                            <div className="rounded-r-full border-2 h-16 w-16 flex items-center justify-center shadow-2xl shadow-slate-100">
                                <span className="text-2xl font-semibold text-black">2</span>
                            </div>
                        </div>
                        <div className=" flex  justify-center mt-10 ">
                            <Image src="/card_2.png" className="h-20 w-24  items-center" alt="" width="300" height="300" />
                        </div>
                        <div className="card-body text-center text-sm pt-5">
                            <p>Elige la tarifa Smart antes de proceder con el pago.</p>
                        </div>
                    </div>

                    {/* card 3 */}
                    <div className="card mx-auto w-72 md:w-80 bg-gradient-to-b from-green-400 to-blue-400 shadow-xl border-2 border-gray-200 ">
                        <div className="h-full pt-5 absolute top-0">
                            <div className="rounded-r-full border-2 h-16 w-16 flex items-center justify-center shadow-2xl shadow-slate-100">
                                <span className="text-2xl font-semibold text-black">3</span>
                            </div>
                        </div>
                        <div className=" flex  justify-center mt-10 ">
                            <Image src="/card_3.png" className="h-20 w-36  items-center" alt="" width="300" height="300" />
                        </div>
                        <div className="card-body text-center text-sm pt-5">
                            <p>Finaliza la reserva y disfruta de los beneficios Smart durante 12 meses.</p>
                        </div>
                    </div>
                </div>


        </div>
    );
};

export default Quality;