import { Link } from "react-router-dom";
import { CardBody, CardContainer, CardItem } from "../components/ui/3d-card";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { PiGithubLogo } from "react-icons/pi";

const StudentInfoCard = () => {
  return (
    <div className="w-full min-h-lvh flex items-center justify-center">
      <CardContainer className="inter-var ">
        <CardBody className="bg-gray-50 relative group/card duration-500 hover:shadow-2xl  dark:hover:shadow-2xl dark:bg-neutral-950 dark:border-white/[0.2] border-black/[0.1] min-h-80 w-72  h-auto rounded-3xl p-6 border  ">
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
                  <CiFacebook className="text-3xl" />
                </Link>
                <Link>
                  <CiLinkedin className="text-3xl" />
                </Link>
                <Link>
                  <PiGithubLogo className="text-3xl" />
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
            as="div"
            translateZ="40"
            className="text-neutral-700 font-medium text-sm max-w-sm mt-2 dark:text-neutral-300"
          >
            <div className="">
              <h5>Student ID: 2122CMT084</h5>
              <h5>Department: CST</h5>
              <h5>Semester: 5th</h5>
              <h5>Roll: 620387</h5>
            </div>
          </CardItem>
          <div className="flex justify-end items-center mt-10">
            {/* <CardItem
              translateZ={20}
              href="https://twitter.com/mannupaaji"
              target="__blank"
              className="px-4 py-2 rounded-xl text-xs  dark:text-white font-semibold"
            >
              Details →
            </CardItem> */}
            <CardItem
              translateZ={20}
              as="button"
              className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
            >
              Details →{" "}
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
};

export default StudentInfoCard;
