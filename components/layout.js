import Navbar from "./navbar";
import Sidebar from "./sidebar";

export default function Layout({ children }) {
  return (
    <div>
      <div className="grid grid-cols-12 gap-6 px-5 my-14 lg:mb-0 md:mb-16 sm:px-20 md:px-32 lg:px-20 xl:px-48 ">
        <div className="h-full col-span-12 p-4 text-base text-center bg-white dark:bg-black lg:col-span-4 rounded-2xl shadow-custom-light dark:shadow-custom-dark ">
          <Sidebar />
        </div>

        <div className="flex flex-col col-span-12 overflow-hidden bg-white shadow-custom-light dark:shadow-custom-dark rounded-2xl lg:col-span-8 dark:bg-dark-500 ">
          <Navbar />
          <main>{children}</main>
        </div>
      </div>
    </div>
  );
}
