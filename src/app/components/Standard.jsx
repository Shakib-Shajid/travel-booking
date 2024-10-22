import Image from 'next/image';

const Empieza = () => {
    return (
        <div data-aos="fade-right"> 
            <div className="hidden md:block" >
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/PAQUETE_VACACIONAL.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Paquetes vacacionales</div>
                                <div className="text-sm font-bold">Viaje Nueva York y Riviera Maya </div>
                                <div className="text-xs">2 adultos, 7 noches</div>
                            </div>
                        </div>
                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className="">4.410 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">4.039 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 371 EUR</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/PAQUETE_VACACIONAL.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Paquetes vacacionales</div>
                                    <div className="text-sm font-bold">Viaje Nueva York y Riviera Maya</div>
                                    <div className="text-xs">2 adultos, 7 noches</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className="">4.410 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">4.039 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 371 EUR</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 2nd */}
            <div className="hidden md:block ">
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/ALOJAMIENTO.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Alojamiento</div>
                                <div className="text-sm font-bold">Hotel Novotel Paris Tour Eiffel 4*</div>
                                <div className="text-xs">2 adultos, 2 niños, 7 noches</div>
                            </div>
                        </div>
                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className="">1.793 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">1.644 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 149 EUR</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/ALOJAMIENTO.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Alojamiento</div>
                                    <div className="text-sm font-bold">Hotel Novotel Paris Tour Eiffel 4*</div>
                                    <div className="text-xs">2 adultos, 2 niños, 7 noches</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className="">1.793 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">1.644 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 149 EUR</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 3th */}
            <div className="hidden md:block ">
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/CRUCEROS.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Cruceros</div>
                                <div className="text-sm font-bold">Barcelona – Londres + Hotel Riu <br /> Plaza London Victoria ****</div>
                                <div className="text-xs">2 adultos, 3 noches</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className="">1.566 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">1.390 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 176 EUR </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/CRUCEROS.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Cruceros</div>
                                    <div className="text-sm font-bold">Mediterráneo MSC World Europa</div>
                                    <div className="text-xs">2 adultos, 3 noches</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className="">1.566 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">1.390 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 176 EUR </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* 4th */}
            <div className="hidden md:block">
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/ESCAPADAS.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Escapadas</div>
                                <div className="text-sm font-bold mr-9">Hotel El Marqués Palace by <br /> Intercort *** + vuelo</div>
                                <div className="text-xs">3 adultos, 1 niño, 6 noches</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className="">1.639 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">1.480 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 159 EUR</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/ESCAPADAS.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Escapadas</div>
                                    <div className="text-sm font-bold">Hotel El Marqués Palace by Intercort *** + vuelo</div>
                                    <div className="text-xs">3 adultos, 1 niño, 6 noches</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className="">1.639 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">1.480 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 159 EUR</div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            {/* 5th */}
            <div className="hidden md:block ">
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/VUELO_HOTEL.webp" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Vuelo + Hotel</div>
                                <div className="text-sm font-bold">Barcelona – Londres + Hotel Riu <br /> Plaza London Victoria ****</div>
                                <div className="text-xs">2 adultos, 7 noches</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className="">1.069 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">984 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 84 EUR </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/VUELO_HOTEL.webp" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Vuelo + Hotel</div>
                                    <div className="text-sm font-bold">Barcelona – Londres + Hotel Riu Plaza London Victoria ****</div>
                                    <div className="text-xs">2 adultos, 7 noches</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className="">1.566 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">984 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 84 EUR </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* 6th */}
            <div className="hidden md:block ">
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/ENTRADAS.webp" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Entradas</div>
                                <div className="text-sm font-bold mr-1">Visita guiada Museos Vaticanos <br /> y Capilla Sixtina</div>
                                <div className="text-xs">8 adultos</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className=""> 560 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">520 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 40 EUR  </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for small */}

            <div className="block md:hidden">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/ENTRADAS.webp" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Entradas</div>
                                    <div className="text-sm font-bold">Visita guiada Museos Vaticanos y Capilla Sixtina</div>
                                    <div className="text-xs">8 adultos</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className=""> 560 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">520 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 40 EUR  </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            
            {/* 7th */}
            <div className="hidden md:block mb-12 lg:mb-14">
                <div className="stats shadow md:w-[90%] custom-1440:w-3/5 xl:w-3/4 my-3">
                    <div className="stat p-3">
                        <div className="flex gap-2">
                            <Image src="/EXPERIENCIAS.jpg" alt="" width="130" height="100" className="rounded-xl" />
                            <div className="text-start  my-auto">
                                <div className="text-xs">Experiencias</div>
                                <div className="text-sm font-bold">Paseo en globo por el Serengueti <br /> (Tanzania) </div>
                                <div className="text-xs">2 adultos</div>
                            </div>
                        </div>

                    </div>

                    <div className="stat place-items-center ">
                        <div className="">Precio PVP</div>
                        <div className=""> 1.074 EUR</div>
                    </div>

                    <div className="stat place-items-center">
                        <div className=""><button className="btn btn-xs">Standard</button></div>
                        <div className="">1.004 EUR</div>
                    </div>

                    <div className="stat place-items-center p-2">
                        <div className="bg-green-300 p-3 rounded-lg text-green-800">
                            <div className="">Ahorro</div>
                            <div className="">- 70 EUR   </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* for small */}

            <div className="block md:hidden mb-12">
                <div className="stats shadow my-3 w-[90%] ">
                    <div className="flex flex-col ">

                        <div className="stat px-3 py-2">
                            <div className="flex gap-2">
                                <Image src="/EXPERIENCIAS.jpg" alt="" width="120" height="120" className="rounded-xl" />
                                <div className="text-start  my-auto">
                                    <div className="text-xs">Experiencias</div>
                                    <div className="text-sm font-bold">Paseo en globo por el Serengueti (Tanzania) </div>
                                    <div className="text-xs">2 adultos</div>
                                </div>
                            </div>
                        </div>


                        <div className="flex flex-row text-base">
                            <div className="stat p-2">
                                <div className="">Precio PVP</div>
                                <div className=""> 1.074 EUR</div>
                            </div>

                            <div className="stat p-2">
                                <div className=""><button className="btn btn-xs">Standard</button></div>
                                <div className="">1.004 EUR</div>
                            </div>

                            <div className="stat m-2 p-1 bg-green-300  rounded-xl text-green-800">
                                <div className="">
                                    <div className="">Ahorro</div>
                                    <div className="">- 70 EUR   </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Empieza;
