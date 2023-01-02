import { useState } from "react";
import ProjectCard from "../components/projectCartd";
import ProjectsNavbar from "../components/projectsNavbar";
import { motion } from "framer-motion";
import { projects as projectsData } from "../info/data";

import Head from "next/head";

export default function Projects() {
  const [projects, setProjects] = useState(projectsData);
  const [active, setActive] = useState("all");
  const [showDetail, setShowDetail] = useState(false);

  const handlerFilterCategory = (value) => {
    if (value === "all") {
      setProjects(projectsData);
      setActive(value);
      return;
    }

    const newArray = projectsData.filter((project) =>
      project.category.includes(value)
    );
    setProjects(newArray);
    setActive(value);
  };
  return (
    <div>
      <Head>
        <title>Profolio-Project</title>
        <meta name="description" content="MERN Developer" />
        <link rel="icon" href="/images/dulal.jpg" />
      </Head>
      <div className="px-5 py-2 overflow-y-scroll" style={{ height: "70vh" }}>
        <ProjectsNavbar
          handlerFilterCategory={handlerFilterCategory}
          active={active}
        />
        <motion.div
          className="relative grid grid-cols-12 gap-4 my-3"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          {projects.map((project) => {
            return (
              <motion.div
                className="col-span-12 p-2  bg-gray-200 rounded-lg sm:col-span-6 lg:col-span-4 dark:bg-dark-200"
                key={Math.random()}
              >
                <ProjectCard
                  project={project}
                  showDetail={showDetail}
                  setShowDetail={setShowDetail}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}
