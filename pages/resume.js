import Bar from "../components/Bar";
import { languages, tools } from "../info/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimations } from "../components/animations";

import Head from "next/head";
const Resume = () => {
  return (
    <div>
      <Head>
        <title>Profolio-Resume</title>
        <meta name="description" content="MERN Developer" />
        <link rel="icon" href="/images/dulal.jpg" />
      </Head>
      <div className="px-6 py-2">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Education</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">
                Diploma In Computer Technology
              </h5>
              <p className="font-semibold">
                Dinajpur Polytechnic Institue (2016-2021)
              </p>
              <p className="my-3">
                Currently i am learing Next Js and Data Structures and
                Algorithms
              </p>
            </div>
          </motion.div>
          <motion.div variants={fadeInUp} initial="initial" animate="animate">
            <h5 className="my-3 text-2xl font-bold">Experience</h5>
            <div className="">
              <h5 className="my-2 text-xl font-bold">Fresher</h5>
            </div>
          </motion.div>
        </div>

        <div className="grid gap-9 md:grid-cols-2">
          <div>
            <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
            <div className="my-2">
              {languages.map((language, i) => (
                <Bar value={language} key={i} />
              ))}
            </div>
          </div>

          <div>
            <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
            <div className="my-2">
              {tools.map((tool, i) => (
                <Bar value={tool} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
