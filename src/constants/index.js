import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a resourceful and determined engineer with a passion for solving complex problems. I excel at rapidly learning new concepts and thrive in environments that demand innovation, creative solutions and a proactive approach.`;

export const EXPERIENCES = [
  {
    year: "July 2025 - Present",
    role: "Software Engineering Intern",
    company: " Booking.com",
    description: `Interning at Booking.com, I work with the SEO team to drive organic traffic growth for search queries. Collaborating cross-functionally and with full-stack solutions to enhance search visibility at scale and drive user engagement. Also, developing my technical and soft skills through workshops, mentoring sessions, and hands-on projects`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    companyLink: "https://www.linkedin.com/company/booking.com"
  },
  {
    year: "Apr 2025 - July 2025",
    role: "Software Engineering Intern",
    company: " Google",
    description: `Collaborated in a team of five to research, implement, test, and evaluate an AI-assisted platform for Google’s Automated Sales Enablement Programs. Leveraged LLMs to streamline and automate the process, incorporating proven instructional design models and patterns to maximise efficiency and scalability while addressing key challenges in sales curriculum creation.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    companyLink: "https://www.linkedin.com/company/google/"
  },
  {
    year: "Sep 2024 - Present",
    role: "Student Software Developer",
    company: " Delft University of Technology",
    description: `Collaborating closely with TU Delft’s Library's Service Design Team to develop, document, and test a prototype chatbot, specifically trained on library service information, with the goal of ultimately deploying it on the website.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    companyLink: "https://www.linkedin.com/school/tudelft/"
  },
  {
    year: "Oct 2024 - Jun 2025",
    role: "Teaching Assistant",
    company: " Delft University of Technology",
    description: `Provide academic support across multiple courses through lab guidance, assignment feedback, and exam grading.<br /><br />
  • <strong>Software Quality & Testing:</strong> Unit, integration, and system testing, TDD, mocking, contracts, design for testability.<br />
  • <strong>Probability Theory and Statistics:</strong> Random variables, statistical inference, linear regression, Python assignments.<br />
  • <strong>Information and Data Management:</strong> SQL, relational algebra, query optimisation, indexing, transactions.<br />
  • <strong>Collaborative Software Engineering Project:</strong> Scrum master, mentoring teams and facilitating agile development.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    companyLink: "https://www.linkedin.com/school/tudelft/"
  },
  {
    year: "Aug 2024 - Jan 2025",
    role: "Student Mentor",
    company: " Delft University of Technology",
    description: `Helping 23 first-year students acclimate to life at TU Delft by providing academic and social support through weekly meetings, fostering bonding, promoting inclusivity, and expanding their knowledge on university-related topics.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    companyLink: "https://www.linkedin.com/school/tudelft/"
  },
  {
    year: "Jul 2024 - Jun 2025",
    role: "Co-Founder & Software Developer",
    company: " Recollect",
    description: `Worked as a co-founder to bring Recollect's (formerly Timecapsule) vision to life. I primarily focused on the development of the IOS application (currently in Beta) using SwiftUI.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    companyLink: "https://www.linkedin.com/company/timecapsule024"
  },
  {
    year: "Jul 2023 - Jun 2025",
    role: "Tutor",
    company: " Private Tutoring",
    description: `Tutoring students in the two-year pre-university IB Diploma Program, providing personalised one-on-one instruction in Mathematics and Physics, both remotely and in person, to enhance their understanding and academic performance.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    companyLink: "https://www.linkedin.com/in/teim-giesen-1bb140286/"
  }
];

export const PROJECTS = [
  {
    title: "Ray Tracer in C++",
    image: project1,
    description:
      "Built a recursive ray tracer from scratch in a team, focusing on (glossy) reflections, transparency, BVH acceleration and environment maps.",
    technologies: ["C++", "OpenGL"]
  },
  {
    title: "Computational Intelligence",
    image: project1,
    description:
      "Created multiple computational intelligence projects from scratch, including: an Ant Colony Optimization algorithm and Genetic Algorithms for solving the Travelling Salesman Problem; a custom Artificial Neural Network with regularization and hyperparameter tuning; and reinforcement learning for robotic decision-making using both Q-learning and SARSA.",
    technologies: ["Python"]
  },
  {
    title: "Paret Interpreter",
    image: project1,
    description:
      "Developed a functional interpreter for 'Paret' in Scala, featuring full support for higher-order function calls, lexical scoping, mutable state, object manipulation, static type inference, and lazy evaluation.",
    technologies: ["Scala"]
  },
  {
    title: "Splitty Expense Manager",
    image: project1,
    description:
      "A full-stack, client-server architecture product built in a team of 6 developers using GitLab and a Scrum-style process. The final project contains various functionalities such as creating events, transfering debts, creating expenses, exploring statistics and more. Techniques such as long polling as well as websockets are employed to enable the aforementioned functionalities.",
    technologies: ["Java", "JavaFX", "Spring", "Gradle"]
  },
  {
    title: "LLM-powered Support Assistant",
    image: project1,
    description:
      "Developed a solution to streamline a hotel chain's support system in the form of a fine-tuned chatbot meant to be used by employees of the company to answer client questions.",
    technologies: ["Python"]
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A portfolio website deployed using various web technologies to showcase projects, professional experience, skills and contact information. This refers to the website you are currently viewing. It was built from the ground up using React.",
    technologies: ["Javascript", "React", "HTML", "CSS"]
  },
  {
    title: "Physics AI Help Tool",
    image: project3,
    description:
      "Developed a classroom tool combining an in-app SQLite database and machine learning to help teachers manage and personalize multiple-choice quizzes. Features include question storage, difficulty prediction using a decision tree, quiz generation, timers, freehand drawing, and a central home interface for lesson flow.",
    technologies: ["Python", "SQL"]
  }
];

export const CONTACT = {
  phoneNo: "+31 618696292",
  email: "teim.giesen@gmail.com",
};
