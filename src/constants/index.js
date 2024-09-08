import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am a resourceful and determined engineer with a passion for solving complex problems. I excel at rapidly learning new concepts and thrive in environments that demand innovation, creative solutions and a proactive approach.\n\nCurrently, I am a prospective honors student in my second year of Computer Science and Engineering at Delft University of Technology, where I am proud to maintain a summa cum laude average of 9.42/10 (4.00 GPA). In addition to my academics, I am the co-founder of Timecapsule and also hold multiple roles within TU Delft, where I contribute my skills to various ventures.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "Sep 2024 - Present",
    role: "Library Student Software Developer",
    company: " Delft University of Technology",
    description: `Collaborating closely with TU Delft’s Library's Service Design Team to develop, document, and test a prototype chatbot, specifically trained on library service information, with the goal of ultimately deploying it on the website.`,
    technologies: ["Javascript", "React.js", "Next.js", "mongoDB"],
    companyLink: "https://www.linkedin.com/school/tudelft/"
  },
  {
    year: "Aug 2024 - Present",
    role: "Student Mentor",
    company: " Delft University of Technology",
    description: `Helping 23 first-year students acclimate to life at TU Delft by providing academic and social support through weekly meetings, fostering bonding, promoting inclusivity, and expanding their knowledge on university-related topics.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
    companyLink: "https://www.linkedin.com/school/tudelft/"
  },
  {
    year: "Jul 2024 - Present",
    role: "Co-Founder & Software Developer",
    company: " Timecapsule",
    description: `Driving the realisation of Timecapsule's vision by spearheading the development of the iOS app, currently functional and in Beta on TestFlight, utilising Swift to deliver a deployable application and an intuitive user experience.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
    companyLink: "https://www.linkedin.com/company/timecapsule024"
  },
  {
    year: "Jul 2024 - Aug 2023",
    role: "Software Developer",
    company: " Domes Resorts | JW Marriott",
    description: `Delivered a customized, fine-tuned chatbot for employee use, designed to enhance customer relations and interaction.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    companyLink: "https://www.linkedin.com/company/domesresorts"
  },
  {
    year: "Jul 2023 - Present",
    role: "Tutor",
    company: " Private Tutoring",
    description: `Tutoring students in the two-year pre-university IB Diploma Program, providing personalised one-on-one instruction in Mathematics and Physics, both remotely and in person, to enhance their understanding and academic performance.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
    companyLink: "https://www.linkedin.com/in/teim-giesen-1bb140286/"
  }
];

export const PROJECTS = [
  {
    title: "Splitty Expense Manager",
    image: project1,
    description:
      "A full-stack, client-server architecture product built in a team of 6 developers using GitLab and a Scrum-style process. The final project contains various functionalities such as creating events, transfering debts, creating expenses, exploring statistics and more. Techniques such as long polling as well as websockets are employed to enable the aforementioned functionalities.",
    technologies: ["Java", "JavaFX", "Spring Boot", "Spring Data", "Gradle"],
    github: 'https://github.com/teimg/splitty-expense-manager',
  },
  {
    title: "Portfolio Website",
    image: project2,
    description:
      "A portfolio website deployed using various web technologies to showcase projects, professional experience, skills and contact information. This refers to the website you are currently viewing. It was built from the ground up using React.",
    technologies: ["Javascript", "React", "HTML", "CSS"],
    github: 'https://github.com/teimg/portfolio-site',
  },
  {
    title: "Physics AI Help Tool",
    image: project3,
    description:
      "This project involves creating a physics help tool that can be used within the classroom. This includes an in-app sqlite database acting as a place for a teacher to store, view, edit and delete multiple choice questions. The tool also uses training data, collected from the client's classroom, to train a supervised learning algorithm (a decision tree created using scikit-learn) to predict a question's difficulty and thereby provide students with challenging yet manageable questions. The software also enables the creation of quizzes using questions from the database (and recommended by the machine learning algorithm). Additionally, the program includes timers, allows for freehand drawings, and includes a general 'home' to base lessons around.",
    technologies: ["Python", "SQL"],
    github: 'https://github.com/teimg/physics-AI-help-tool',
  }
];

export const CERTIFICATES = [
  {
    title: "AI Alignment 101 Course",
    provider: "Delft AI Safety Initiative",
    description:
      "A condensed 5-week course facilitated by a DAISI member, introducing you to key technical AI alignment research.npm",
    link: 'https://github.com/teimg/splitty-expense-manager',
    companyLink: "https://www.delftaisafety.org/daisi-agisf-curriculum"
  },
  {
    title: "Scientific Computing with Python",
    provider: "freeCodeCamp",
    description:
      "A 300-hour python developer certification including 5 final coding projects.",
    link: 'https://www.freecodecamp.org/certification/Teim_Giesen/scientific-computing-with-python-v7',
    companyLink: "https://www.freecodecamp.org/"
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+31 618696292",
  email: "teim.giesen@gmail.com",
};
