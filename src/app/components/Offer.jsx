import Image from "next/image";
import Toggle from "./Toggle";

const Offer = () => {
    return (
        <div className="w-full bg-gradient-to-r from-green-300 to-blue-300 text-center my-10 relative">

            {/* ...................................................... */}
            {/* <Image src="/offer_1.png" alt="" width="100" height="100" className="absolute w-60 h-28 -top-10 md:-left-40 lg:left-0 -left-48" /> */}

            {/* ...................................................... */}

            <div className="py-10  text-black w-[90%] md:w-full mx-auto" data-aos="fade-down">
                <h3 className="text-3xl my-5 font-roboto font-bold gradient-text1">¿Cuánto se puede ahorrar con los programas Smart Tour? </h3>
                <p>El ahorro varía en función del servicio, del importe y los pasajeros de la reserva. Ejemplos de ahorro:</p>
            </div>

            <Toggle />

            {/* 1st */}
            


            {/* <div className=" lg:flex justify-end hidden">
                <Image src="/offer_2.png" alt="" width="100" height="100" className="absolute w-60 h-28 -bottom-10 right-0 " />
            </div> */}


            {/* small */}
            {/* <div className=" lg:hidden">
                <Image src="/offer_2(1).png" alt="" width="52" height="52" className="absolute md:h-32 md:w-20 -bottom-7 right-0 " />
            </div> */}




        </div>


    );
};

export default Offer;