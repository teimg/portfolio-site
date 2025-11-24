import {HERO_CONTENT} from "../constants"
import {HERO_BANNER} from "../constants"
import {NAME} from "../constants"
import img from "../assets/about.jpg"
import {motion} from "framer-motion"

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
        <div className="flex full-wrap">
            <div className="w-full lg:w-1/2">
                <div className="flex flex-col items-center lg:items-start">
                    <motion.h1 className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
                    initial = {{x: -100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.5}}>
                        {NAME}
                    </motion.h1>
                    <motion.span className="bg-gradient-to-l from-red-300 via-slate-500 to-blue-500 bg-clip-text text-2xl track-tight text-transparent max-w-xl"
                    initial = {{x: -100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 0.75}}>
                        {HERO_BANNER}
                    </motion.span>
                    <motion.p className="my-2 text-xl max-w-xl py-6 font-light tracking-tighter"
                    initial = {{x: -100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1}}>
                       {HERO_CONTENT}
                    </motion.p>
                </div>
            </div>
            <div className="w-full lg:w-1/2 lg:p-8">
                <div className="flex justify-center">
                    <motion.img src={img} alt="Teim Giesen" className="w-3/4" initial = {{x: 100, opacity: 0}}
                    animate = {{x: 0, opacity: 1}}
                    transition={{duration: 0.5, delay: 1.25}}/>
                </div>
            </div>
        </div>
        
    </div>
  );
};

export default Hero