import Layout from "../components/layout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "next-themes";
import { useEffect, useState } from "react";
import Loading from "../components/loading";
function MyApp({ Component, pageProps, router }) {
  const [isloading, setIloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIloading(false);
    }, 2500);
  }, []);
  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <ThemeProvider attribute="class">
          <Layout>
            <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </Layout>
        </ThemeProvider>
      )}
    </div>
  );
}

export default MyApp;
