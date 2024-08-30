import { RiReactjsLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaSwift } from "react-icons/fa";
import { SiSpring } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import {motion} from "framer-motion"

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      <motion.h2 className="my-20 text-center text-3xl"
      whileInView={{opacity: 1, y: 0}}
      initial={{opacity:0, y: -100}}
      transition={{duration: 0.5}}>Technologies</motion.h2>
      <motion.div className="flex border-neutral-800 flex-wrap items-center justify-center gap-4"
      whileInView={{opacity: 1, x: 0}}
      initial={{opacity:0, x: -100}}
      transition={{duration: 1}}>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <FaJava className="text-7xl text-blue-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <FaPython className="text-7xl text-yellow-300" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <FaSwift className="text-7xl text-orange-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <SiSpring className="text-7xl text-green-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4 bg-neutral-100">
          <FaGitAlt className="text-7xl text-orange-800" />
        </div>
      </motion.div>
    </div>
  );
};

export default Technologies;
