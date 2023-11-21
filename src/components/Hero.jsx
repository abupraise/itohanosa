import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#4CAF50]' />
          <div className='w-1 sm:h-80 h-40 earth-green-gradient' />
        </div>

        <div style={{ zIndex: 2 }}>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hello! I am <span className='text-[#4CAF50]'>Itohan-Osa Ibebuchi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop map visuals, 3D models and <br className='sm:block hidden' />
            I am a remote sensing analyst.
          </p>
          
          <a href="/Itohan-Osa DataScience CV.pdf" download className="mt-4 inline-block bg-[#4CAF50] text-white px-6 py-2 rounded hover:bg-green-600 transition cursor-pointer shadow-md hover:shadow-lg transform hover:scale-105">
            Download Résumé
          </a>
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-0 bottom-0 w-full flex justify-center items-center'>
    <a href='#about'>
        <div className='w-[35px] h-[64px] rounded-3xl border-4 border-white flex justify-center items-start p-2'>
            <motion.div
                animate={{
                    y: [0, 24, 0],
                }}
                transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "loop",
                }}
                className='w-3 h-3 rounded-full bg-white mb-1'
            />
        </div>
    </a>
</div>

    </section>
  );
};

export default Hero;
