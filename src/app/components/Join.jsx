"use client"
import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";

const Join = () => {
    return (
        <div className="relative py-1 lg:py-10 bg-gradient-to-r from-green-300 to-blue-300" data-aos="fade-up">
            {/* Overlay */}

            <div className="relative z-20"> {/* Content with z-index to stay on top of overlay */}
                <div className="text-center my-5 space-y-2">
                    <h3 className="text-3xl font-bold">Unirse a Smart Tour es muy sencillo</h3>
                    <p>¡Es fácil! Sigue estos sencillos pasos.</p>
                </div>

                <section className="w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row" data-aos="fade-right">
                    <div className="w-[90%] md:w-[50%] lg:ml-10 space-y-3">
                        <div className="flex justify-center lg:justify-start my-5 md:my-2">
                            <p className="inline-block bg-black text-white py-1 px-4 rounded-full">Paso 1</p>
                        </div>
                        <h4 className="text-4xl font-bold">Busca el viaje o actividad que quieras </h4>
                        <p>Busca una oferta de cualquier operador turístico de los miles con los que trabajamos: vuelo + hotel, paquetes
                            vacacionales, alojamiento, excursiones, actividades, transporte, museos, entradas, transporte, etc.
                        </p>
                    </div>

                    {/* <Image src="/logo_10.png" width="250" height="100" alt=""  /> */}

                    <div className="card text-white w-96">
                        <Swiper
                            autoplay={{
                                delay: 1200,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay, Pagination, Navigation]}
                            grabCursor={true}
                            className="mySwiper w-full">
                            <SwiperSlide><Image src="/logo_10.png" width="250" height="100" alt="" className='w-80 mx-auto h-52 rounded-2xl' /></SwiperSlide>
                            <SwiperSlide><Image src="/logo_11.png" width="250" height="100" alt="" className='w-80 mx-auto h-52 rounded-2xl' /></SwiperSlide>
                            <SwiperSlide><Image src="/logo_14.png" width="250" height="100" alt="" className='w-80 mx-auto h-52 rounded-2xl' /></SwiperSlide>
                            <SwiperSlide><Image src="/logo_15.png" width="250" height="100" alt="" className='w-80 mx-auto h-52 rounded-2xl' /></SwiperSlide>
                            <SwiperSlide><Image src="/logo_17.jpg" width="250" height="100" alt="" className='w-80 mx-auto h-52 rounded-2xl' /></SwiperSlide>
                            <SwiperSlide><Image src="/logo_19.png" width="250" height="100" alt="" className='w-80 mx-auto h-52 rounded-2xl' /></SwiperSlide>
                            {/* <SwiperSlide><Image src="/logo_10.png" width="250" height="100" alt=""  /></SwiperSlide> */}
                            {/* <SwiperSlide><Image src="/logo_10.png" width="250" height="100" alt=""  /></SwiperSlide> */}
                            {/* <SwiperSlide><Image src="/logo_10.png" width="250" height="100" alt=""  /></SwiperSlide> */}
                        </Swiper>
                    </div>

                </section>

                <section className="w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row-reverse mt-10">
                    <div className="w-[90%] md:w-[50%] lg:ml-10 space-y-3">
                        <div className="flex justify-center lg:justify-start my-5 md:my-2">
                            <p className="inline-block bg-black text-white py-1 px-4 rounded-full">Paso 2</p>
                        </div>
                        <h4 className="text-4xl font-bold">Dínoslo y te reducimos el precio </h4>
                        <p>Una vez elegida la tarifa del operador nos la comunicas y te aplicamos la reducción de la tarifa en función de la suscripción
                            elegida, con Smart Tour Premium Pass te eliminamos totalmente la comisión, con la tarifa Smart Tour Standard te
                            eliminamos el 70% de la comisión.</p>
                    </div>

                    <div className="bg-base-300 w-96 rounded-2xl">
                        {/* <h3 className="pt-5 px-6 text-xl font-bold text-start">Prueba eDreams Prime</h3>
                        <div className="flex flex-col items-center">
                            <div className="bg-white flex gap-5 items-center justify-between p-5 rounded-xl w-[90%] mt-4">
                                <div>
                                    <h5 className="text-blue-600 font-bold text-start">Prueba gratis de 15 días</h5>
                                    <p className="text-base">Tarifa con descuentos Prime</p>
                                </div>
                                <p className="text-green-500 text-xl">+0,00 $</p>
                            </div>

                            <div className="bg-white flex gap-5 items-center justify-between p-5 rounded-xl w-[90%] mt-4 mb-5">
                                <div>
                                    <h5 className="font-bold text-start">Tarifa sin descuentos</h5>
                                </div>
                                <p className="text-green-500 text-xl">+67,00 $</p>
                            </div>
                        </div> */}
                        <Image src="/support.gif" width="1000" height="300" alt="" className='h-60 rounded-2xl' />
                    </div>
                </section>

                <section className="w-full max-w-7xl mx-auto flex flex-col gap-10 justify-center items-center lg:flex-row mt-10" data-aos="fade-right">
                    <div className="w-[90%] md:w-[50%] lg:ml-10 space-y-3">
                        <div className="flex justify-center lg:justify-start my-5 md:my-2">
                            <p className="inline-block bg-black text-white py-1 px-4 rounded-full">Paso 3</p>
                        </div>
                        <h4 className="text-4xl font-bold">¡Ahorra y disfruta! </h4>
                        <p>Finaliza la reserva con nosotros y disfruta de los beneficios Smart Tour durante 12 meses.</p>
                    </div>

                    <div className="card bg-black text-black w-96">
                        <Image src="/icon_2.gif" width="1000" height="300" alt="" className='h-60 rounded-2xl' />
                        {/* <div className="card-body h-56 flex flex-col items-center justify-center text-center">
                            <input type="text" placeholder="París" className="input input-bordered mb-4 w-[76%]" />
                            <button className="btn btn-success w-[76%] rounded-full text-white">Buscar</button>
                        </div> */}
                    </div>
                </section>
            </div>
        </div>


    );
};

export default Join;