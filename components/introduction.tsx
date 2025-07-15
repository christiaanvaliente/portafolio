"use client"
import Image from "next/image";
import { TypeAnimation } from 'react-type-animation';

const Introduction = () => {
    return (
        <div className="z-20 w-full">
            <div className="z-20 grid items-center h-full p-6 py-20 md:py-0 md:grid-cols-2 mt-4">
                <Image src="/avatar marca personal home sf.png" priority width="800" height="800" alt="Avatar" />
                <div className="flex flex-col justify-center items-center max-w-md mx-auto text-center">
                    <h1 className="mb-5 text-2xl leading-tight text-center md:text-left md:text-4xl md:mb-10"> Mi enfoque combina  <br />
                        <TypeAnimation
                            sequence={[
                                'Desarrollo Backend',
                                1000,
                                'Desarrollo Frontend',
                                1000,
                                'Gestión Técnica de Proyectos',
                                1000,
                                'Entrega de Soluciones Funcionales',
                                1000
                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                            className="font-bold text-secondary"
                        />
                    </h1>

                    <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-justify">
                        Tengo una formación sólida en desarrollo web y experiencia práctica en proyectos reales. Me especializo 
                        en crear interfaces limpias, conectar APIs y construir soluciones funcionales que mejoran procesos en 
                        organizaciones y emprendimientos.
                    </p>

                    <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
                        <a href="/projects" className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50">
                            Explorar mi trabajo
                        </a>
                        <a href="/contact"
                            className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary" >
                            Hablemos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Introduction;