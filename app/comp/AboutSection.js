"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
 <ul className="list-disc pl-2">
  <li>
    AI & Machine Learning – LLM Evaluation, Prompt Engineering, NLP, Transfer Learning, CNNs, Scikit-learn, XGBoost
  </li>
  <li>
    Backend & MLOps – Python, FastAPI, REST APIs, Docker, MLflow, Airflow, GitLab CI/CD
  </li>
  <li>
    Databases & Tools – MySQL, MongoDB, PostgreSQL, Git, GitHub, Linux, Postman
  </li>
  <li>
    Programming Languages – Python, JavaScript, SQL, Java
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
            I am an AI/ML and Software Engineering enthusiast with a passion for building intelligent, scalable, and reliable applications. I have experience working with Python, Machine Learning, FastAPI, LLM evaluation, CI/CD automation, and MLOps pipelines. I am a quick learner who enjoys exploring new AI technologies, improving system quality, and solving complex problems. I am a collaborative team player excited to contribute to innovative AI-driven solutions and real-world applications.
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
