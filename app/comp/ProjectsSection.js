"use client"
import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
const projectsData = [
  { 
    id: 1,
    title: "Think Estate",
    description: "Think Estate is a leading real estate agency that specializes in helping clients buy, sell, and rent properties in the most desirable neighborhoods Technology : MongoDB, Express, React, Node and Firebase",
    image: "/images/7.png",
    tag: ["All","Web"],
    gitUrl:"https://github.com/AditiVadi/Real_Estate",
    previewUrl:"https://mern-estate-vmow.onrender.com/"
},
    {
        id: 2,
        title: "EventEase",
        description: "An Event organization platform designed to streamline the process of planning, organizing, and participating in various events. Allows users to create and manage events of all types, with features such as search and filtering.Web app also integrates secure payment processing through Stripe, enabling online transactions for event registrations and ticket purchases. Technology - Ui/Ux,Next js,Node js,Mongo DB",
        image: "/images/1.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/eventease",
        previewUrl:"https://eventease-rho.vercel.app/"

    },
    {
        id: 3,
        title: "Serve Us (Urban Service)",
        description: "A web application for socializing urban services, allowing users to connect as either a service provider or a service seeker and store each in a database.Serve the services and be compensated, or seek a service and pay the provider.Technology: React JS, TailwindCSS , Material UI",
        image: "/images/22.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/ServeUs",
        previewUrl:"/"
    },
    {
        id: 4,
        title: "Nike Shoes Site",
        description: "A web site of Nike Shoes site which describe New Arrival of Nike Shoes.Technology - React JS |Tailwind CSS",
        image: "/images/3.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/Nike-Aditi-.github.io",
        previewUrl:"https://nike-aditi-github-io.vercel.app/"
    },
    {
        id: 5,
        title: "NoteScribe",
        description: "NoteScribe is a dynamic website designed to help users stay organized by combining a to-do list and note-keeping features. Built with HTML, CSS, and JavaScript, it offers an intuitive platform for managing tasks and notes efficiently, with capabilities like setting due dates, prioritizing tasks, and organizing notes. The website is responsive across various devices, ensuring a seamless user experience.",
        image: "/images/4.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/NoteScribe",
        previewUrl:""
    },
    {
        id: 6,
        title: "CoinSphere",
        description: "A web based application to transfer cryptocurrency such as ethereum from one account to another using metamask with message and keys and also with GIPHY messages.",
        image: "/images/5.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/CryptoSphere",
        previewUrl:"/"
    },
    { 
        id: 7,
        title: "Library-System-Management",
        description: "The Library Management System consists of an Admin Panel and a Student Panel.Admin Panel,administrators can view book data, due dates, and issue records including student names Student Panel enables students to search for books and perform actions such as renewal,issuance, and submission online. Technology : Html | CSS | Javascript",
        image: "/images/6.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/Library-System-Management",
        previewUrl:"https://library-system-management.vercel.app/index.html"
    },
    {
        id: 8,
        title: "Skin Disease Classification",
        description: "Skin Disease Classification using Pre-Trained Convolution Neural Network with Transfer Learning",
        image: "/images/23.png",
        tag: ["All","ML"],
        gitUrl:"https://ieeexplore.ieee.org/abstract/document/10511794",
        previewUrl:"https://ieeexplore.ieee.org/abstract/document/10511794"
    },
    {
        id: 9,
        title: "AI Snake Game using Deep Q-Learning",
        description: "Developed a Snake game AI using Python, PyTorch, and Deep Q-Learning, with real-time visualization in Pygame",
        image: "/images/24.png",
        tag: ["All","ML"],
        gitUrl:"https://github.com/AditiVadi/snake_learns",
        previewUrl:"https://drive.google.com/file/d/1eCh0ZTxubG5Uv8c-PtCygPTcb26bquKq/view?usp=sharing"
    },
    
]

const ProjectsSection = () => {
    const [tag, setTag] = useState("All");
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
  
    const handleTagChange = (newTag) => {
      setTag(newTag);
    };
  
    const filteredProjects = projectsData.filter((project) =>
      project.tag.includes(tag)
    );
  
    const cardVariants = {
      initial: { y: 50, opacity: 0 },
      animate: { y: 0, opacity: 1 },
    };
  
    return (
      <section id="projects">
        <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
          My Projects
        </h2>
        <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
          <ProjectTag
            onClick={handleTagChange}
            name="All"
            isSelected={tag === "All"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="Web"
            isSelected={tag === "Web"}
          />
          <ProjectTag
            onClick={handleTagChange}
            name="ML"
            isSelected={tag === "ML"}
          />
        </div>
        <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
          {filteredProjects.map((project, index) => (
            <motion.li
              key={index}
              variants={cardVariants}
              initial="initial"
              animate={isInView ? "animate" : "initial"}
              transition={{ duration: 0.3, delay: index * 0.4 }}
            >
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.image}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
              />
            </motion.li>
          ))}
        </ul>
      </section>
    );
  };
  
  export default ProjectsSection;
