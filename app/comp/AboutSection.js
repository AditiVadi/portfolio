"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
 <ul className="list-disc pl-2 space-y-2">
  <li>
    <strong>Backend Development & APIs:</strong> Python, FastAPI, Node.js, Express.js, REST APIs, Authentication, Microservices
  </li>
  <li>
    <strong>AI & Machine Learning:</strong> LLM Evaluation, Prompt Engineering, NLP, Transfer Learning, CNNs, Scikit-learn, XGBoost, Model Optimization
  </li>

  <li>
    <strong>MLOps & DevOps:</strong> Docker, MLflow, GitLab CI/CD, Kubernetes, Deployment Automation, Monitoring Pipelines
  </li>

  <li>
    <strong>Databases & Cloud Tools:</strong> MySQL, PostgreSQL, MongoDB, Redis, Git, GitHub, Linux, Postman
  </li>

  <li>
    <strong>Frontend & Full-Stack Development:</strong> React.js, Next.js, Redux Toolkit, Tailwind CSS, MERN Stack
  </li>

  <li>
    <strong>Programming Languages:</strong> Python, JavaScript, SQL, Java, C++
  </li>
</ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Charotar University of Science And Technology</li>
       
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Google IT Automation with Python</li>
        <li>Google Google UX Design Specialization</li>
        <li>The Full Stack by Meta</li>
        <li>Supervised Machine Learning: Regression and Classification</li>
        <li>Promt Engineering for Everyone from CongnitiveClass.ai</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/laptop.jpeg" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
           I am a Software Engineer and AI/ML enthusiast with experience in building scalable full-stack applications, backend APIs, and AI-powered systems. My expertise includes Python, FastAPI, Machine Learning, CI/CD automation, MLOps pipelines, Docker, and cloud-based deployment workflows. I enjoy designing efficient systems, improving application reliability, and integrating AI into real-world products. I am a quick learner, collaborative team player, and passionate about developing innovative and high-performance software solutions.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
