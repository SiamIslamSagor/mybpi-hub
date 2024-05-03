import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/components/ui/aurora-background";
import { Highlight } from "../ui/components/ui/hero-highlight";
import StudentInfoCard from "../ui/shared/StudentInfoCard";

import "../../src/App.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="darkk ">
      <AuroraBackground className={"curved_fancy_border"}>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-full container max-w-7xl "
        >
          <div className="flex flex-col items-center justify-center h-[20rem]">
            <div className="">
              <motion.h1
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [20, -5, 0],
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.4, 0.0, 0.2, 1],
                }}
                className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white  lg:max-xl:leading-relaxed lg:leading-snug text-center mx-auto "
              >
                Level Up Your BPI Experience:{" "}
                <br className="sm:hidden md:block xl:hidden" />
                <Highlight className="text-black dark:text-white md:max-xl:top-4 ">
                  Find, Connect, Grow{" "}
                </Highlight>
              </motion.h1>
              <div>
                <p className="mx-auto text-center md:max-xl:pt-10 my-3 2xsm:my-4 text-sm sm:text-base md:text-lg lg:text-xl dark:text-slate-200 md:tracking-tight">
                  Build your BPI network! MyBPI Hub connects students, faculty,
                  and alumni for collaboration and lifelong learning.
                </p>
              </div>
            </div>
            <div className="md:mt-5 flex flex-col sm:flex-row space-y-4 sm:space-y-0 space-x-0 sm:space-x-4">
              <Link to={"/registration"}>
                <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                  Join now
                </button>
              </Link>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                Find Identity
              </button>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
      <section className="">
        <StudentInfoCard />
      </section>
      {/* <section className="max-sm:px-2 border">
        <RegisterForm />
      </section> */}
    </div>
  );
};

export default Home;
