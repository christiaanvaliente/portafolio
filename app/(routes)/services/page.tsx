import AvatarServices from "@/components/avatar-services";
import CircleImage from "@/components/circle-image";
import SliderServices from "@/components/slider-services";
import TransitionPage from "@/components/transition-page";

const ServicesPage = () => {
  return (
    <>
      <TransitionPage />
      <CircleImage />

      {/* Aumentamos altura mínima y removemos restricciones de overflow */}
      <section className="relative min-h-[750px] py-16 px-4 md:px-20 bg-transparent text-white overflow-visible">

        {/* Imagen con Motion */}
        <AvatarServices />

        {/* Contenedor de contenido principal */}
        <div className="relative z-10 max-w-7xl mx-auto grid gap-10 md:grid-cols-2 items-center bg-[#0e0c23]/70 backdrop-blur-sm rounded-xl p-6 md:p-12 shadow-lg">
          
          {/* TEXTO */}
          <div>
            <h1 className="text-4xl font-bold leading-tight mb-6">
              Mis <span className="text-secondary">servicios.</span>
            </h1>

            <p className="text-lg text-gray-300 mb-6 text-justify">
              Ofrezco servicios de desarrollo web centrados en la creación
              de plataformas atractivas, funcionales y adaptadas a cada necesidad.
              Utilizo tecnologías modernas como HTML, CSS, JavaScript y frameworks actuales
              para diseñar interfaces intuitivas que potencien la presencia digital y refuercen
              la identidad de marca de cada cliente.
            </p>

            <button className="px-6 py-3 rounded-lg bg-secondary hover:bg-secondary/70 transition mx-auto md:mx-0 block md:inline-block">
              Contacta conmigo
            </button>
          </div>

          {/* SLIDER */}
          <div>
            <SliderServices />
          </div>
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
