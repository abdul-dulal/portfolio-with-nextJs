import Image from "next/image";
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { useTheme } from "next-themes";
export default function Sidebar() {
  const { theme, setTheme } = useTheme();
  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <div>
      <Image
        src={"/images/dulal.jpg"}
        className=" mx-auto  rounded-full "
        height={0}
        width={50}
        alt=""
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-Kaushan">
        Abdul <span className="text-green ml-1"> Dulal</span>
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200 dark:bg-black-500 text-center">
        Front-End Developer
      </p>
      <a
        href=""
        className="flex items-center justify-center px-2 py-1 my-2 bg-gray-200 rounded-full cursor-pointer dark:bg-dark-200 dark:bg-black-500"
      >
        <BiDownload className="w-6 h-6" />
        <span> Download Resume</span>
      </a>
      {/* icon */}

      {/* Socials */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full ">
        <a href="https://www.youtube.com/channel/UClW8d1f5m0QAE_Ig024EP6A">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.linkedin.com/in/sumit-dey-4a04431a9/">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="https://www.instagram.com/_sumax__/">
          <AiFillFacebook className="w-8 h-8 cursor-pointer" />{" "}
        </a>
      </div>

      {/* Contacts */}
      <div
        className="py-4 my-5 bg-gray-200 dark:bg-dark-200 dark:bg-black-500"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center ">
          <GoLocation className="mr-2" />{" "}
          <span className="">Rangpur,Bangladesh </span>
        </div>
        <p className="my-2 text-center"> dulal.dpi.387364@gmail.com </p>
        <p className="my-2 text-center">01957804564 </p>
      </div>

      <button
        onClick={() => window.open("mailto:dulal.dpi.387364@gmail.com")}
        className="w-8/12 px-5 py-2 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 hover:scale-105 focus:outline-none"
      >
        Email Me
      </button>
      <button
        onClick={changeTheme}
        className="w-8/12 px-5 py-2 my-4 text-white bg-black rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 "
      >
        Toggle Theme
      </button>
    </div>
  );
}
