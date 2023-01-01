import Layout from "../components/layout";
import "../styles/globals.css";
import { AnimatePresence } from "framer-motion";

import { ThemeProvider } from "next-themes";
function MyApp({ Component, pageProps, router }) {
  return (
    <ThemeProvider attribute="class">
      <Layout>
        <AnimatePresence exitBeforeEnter>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
