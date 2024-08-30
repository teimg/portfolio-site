import {CERTIFICATES} from "../constants"
import {motion} from "framer-motion"

const Certificates = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
    <motion.h1 className="my-20 text-center text-3xl"
    whileInView={{ opacity: 1, y: 0 }}
    initial={{ opacity: 0, y: -100 }}
    transition={{ duration: 0.5, delay: 0.2}}>Certificates</motion.h1>
    <div>
        {CERTIFICATES.map((certificate, index) => (
        <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div className="w-full lg:w-1/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.7 }}>
                <p className="mb-2 text-l text-neutral-300 font-bold">{certificate.provider}</p>
                <a href={certificate.link} className="mb-2 text-sm text-neutral-300 hover:text-blue-400">Proof of Credentials</a>
            </motion.div>
            <motion.div className="w-full max-x-xl lg:w-3/4"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.7 }}>
                <h5 className="mb-2 font-semibold">{certificate.title}</h5>
                <p className="mb-4 text-neutral-300">
                    {certificate.description}
                </p>
            </motion.div>
        </div>     
        ))}
    </div>
</div>
  )
}

export default Certificates