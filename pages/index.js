import Head from "next/head";
import ServiceCard from "../components/servcieCard";
import { services } from "../info/data";
import { motion } from "framer-motion";
import { fadeInUp, routeAnimations, stagger } from "../components/animations";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Profolio-Home</title>
        <meta name="description" content="MERN Developer" />
        <link rel="icon" href="/images/dulal.jpg" />
      </Head>
      <div className="flex flex-col px-6">
        <h5 className="my-3 font-medium text-lg">
          I am passionate about web development. I believe in hard work and
          efficiency. I always like to learn new things and have experience with
          new stuff. I am always ready to accomplish any task by working hard.
          Seeking a role as a front-end.
        </h5>
        <div
          className="p-4   mt-5 py-10 bg-gray-300 dark:bg-dark-100 "
          style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
        >
          <div>
            <h6 className="my-3 tracking-wide text-xl font-bold">
              What I Offer
            </h6>
          </div>
          <motion.div
            className="grid lg:grid-cols-2 gap-6"
            variants={stagger}
            initial="initial"
            animate="animate"
          >
            {services.map((service) => {
              return (
                <motion.div
                  className="bg-gray-200 dark:bg-dark-300 rounded-lg lg:col-span-1"
                  key={Math.random()}
                  variants={fadeInUp}
                >
                  <ServiceCard service={service} />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
