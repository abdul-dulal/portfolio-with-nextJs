import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar(params) {
  const [activeItems, setActiveItems] = useState("");
  const { pathname } = useRouter();
  useEffect(() => {
    if (pathname === "/") return setActiveItems("About");
    if (pathname === "/projects") return setActiveItems("Projects");
    if (pathname === "/resume") return setActiveItems("Resume");
  }, [pathname]);
  return (
    <div className="flex justify-between py-3 my-3 px-5">
      <span className="font-bold text-green md:text-2xl text-xl border-b-4 border-green ">
        {activeItems}
      </span>
      <div className="flex space-x-5 text-xl">
        {navItem(activeItems, setActiveItems, "About", "/")}
        {navItem(activeItems, setActiveItems, "Projects", "projects")}
        {navItem(activeItems, setActiveItems, "Resume", "resume")}
      </div>
    </div>
  );
}

const navItem = (activeItems, setActiveItems, name, route) => {
  return (
    activeItems !== name && (
      <Link href={route}>
        <span onClick={() => setActiveItems(name)} className="hover:text-green">
          {name}
        </span>
      </Link>
    )
  );
};
