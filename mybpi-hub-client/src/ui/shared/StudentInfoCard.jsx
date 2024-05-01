import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const StudentInfoCard = () => {
  return (
    <div className="w-full min-h-lvh flex items-center justify-center ">
      <CardContainer className="inter-var ">
        <CardBody className="bg-gray-50 relative group/card shadow2xl  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] min-h-80 w-72  h-auto rounded-3xl p-6 border  ">
          <CardItem
            translateZ="70"
            className="text-xl  rounded-full dark:bg-neutral-800 bg-black font-bold  dark:text-white absolute left-[72px] -top-20 "
          >
            <a
              target="_blank"
              href="https://md-siam-official.web.app/assets/me9-EoGMCzi3.jpg"
            >
              <img
                src="https://md-siam-official.web.app/assets/me9-EoGMCzi3.jpg"
                alt="student photo"
                className="size-36 rounded-full object-cover scale-95 group-hover:shadow-2xl duration-500"
              />
            </a>
            <div className="absolute  w-full text-center flex flex-col -bottom-12">
              <div className="flex justify-center gap-2 ">
                <Link>
                  <FaFacebook className="text-3xl  hover:opacity-75 duration-300 " />
                </Link>
                <Link>
                  <FaLinkedin className="text-3xl  hover:opacity-75 duration-300 " />
                </Link>
                <Link>
                  <FaGithub className="text-3xl  hover:opacity-75 duration-300 " />
                </Link>
              </div>
            </div>
          </CardItem>
          <CardItem
            translateZ="55"
            className="text-xl font-bold text-neutral-800 dark:text-white pt-28"
          >
            <h4> MD SIAM ISLAM SAGOR</h4>
          </CardItem>
          <CardItem
            as="p"
            translateZ="40"
            className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            <div className="">
              <h5>Student ID: 2122CMT084</h5>
              <h5>Department: CST</h5>
              <h5>Semester: 5th</h5>
              <h5>Roll: 620387</h5>
            </div>
          </CardItem>
          <div className="flex justify-between items-center mt-10">
            <CardItem
              translateZ={20}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
            >
              Details →
            </CardItem>
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Sign up
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default StudentInfoCard;
