import Image from "next/image";
import { MotionTransition } from "./transition-component";

const AvatarServices = () => {
  return (
    <MotionTransition position="right" className="bottom-[-55px] left-[18%] hidden md:inline-block md:absolute">

      <Image
        src="/avatar-service.png"
        width={300}
        height={300}
        className="w-[350px] h-full"
        alt="Particles"
      />
    </MotionTransition>
  );
};

export default AvatarServices;
