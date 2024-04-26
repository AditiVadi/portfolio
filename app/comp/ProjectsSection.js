"use client"
import React, { useState,useRef } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag';
import { motion, useInView } from "framer-motion";
const projectsData = [
    {
        id: 1,
        title: "EventEase",
        description: "Project 1 description",
        image: "/images/1.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/eventease",
        previewUrl:"https://eventease-rho.vercel.app/"

    },
    {
        id: 2,
        title: "Serve Us (Urban Service)",
        description: "Project 2 description",
        image: "/images/22.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/ServeUs",
        previewUrl:"/"
    },
    {
        id: 3,
        title: "Nike Shoes Site",
        description: "Project 3 description",
        image: "/images/3.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/Nike-Aditi-.github.io",
        previewUrl:"https://nike-aditi-github-io.vercel.app/"
    },
    {
        id: 4,
        title: "NoteScribe",
        description: "Project 4 description",
        image: "/images/4.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/NoteScribe",
        previewUrl:""
    },
    {
        id: 5,
        title: "CoinSphere",
        description: "Project 5 description",
        image: "/images/5.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/CryptoSphere",
        previewUrl:"/"
    },
    {
        id: 6,
        title: "Library-System-Management",
        description: "Project 6 description",
        image: "/images/6.png",
        tag: ["All","Web"],
        gitUrl:"https://github.com/AditiVadi/Library-System-Management",
        previewUrl:"https://library-system-management.vercel.app/index.html"
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