import {PROJECTS} from "../constants"
import {motion} from "framer-motion"

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        className="my-20 text-center text-3xl"
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5, delay: 0.2}}
      >
        Projects
      </motion.h1>
      <div>
        {PROJECTS.map((project, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              className="w-full lg:w-1/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-3 text-l text-neutral-300 font-bold">
                {project.title}
              </p>
              <a
                href={project.github}
                className="mb-2 text-sm text-neutral-300 hover:text-blue-400"
              >
                GitHub & Video Demos
              </a>
            </motion.div>
            <motion.div
              className="w-full max-x-xl lg:w-3/4"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 0.7 }}
            >
              <p className="mb-4 text-neutral-300">{project.description}</p>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="mr-2 rounded bg-neutral-900 px-1 py-1 text-sm font-medium text-purple-800"
                >
                  {tech}
                </span>
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects