import { motion } from "framer-motion";
import { AuroraBackground } from "../ui/components/ui/aurora-background";
import { TypewriterEffectSmooth } from "../ui/components/ui/typewriter-effect";

const Home = () => {
  return (
    <div className="">
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4 w-full"
        >
          <div className="flex flex-col items-center justify-center h-[20rem]">
            <p className="text-neutral-600 dark:text-neutral-200">
              The road to freedom starts from here
            </p>
            <TypewriterEffectSmooth words={words} />
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
              <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
                Join now
              </button>
              <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
                Find Identity
              </button>
            </div>
          </div>
        </motion.div>
      </AuroraBackground>
    </div>
  );
};

const words = [
  {
    text: "Build",
  },
  {
    text: "awesome",
  },
  {
    text: "apps",
  },
  {
    text: "with",
  },
  {
    text: "Aceternity.",
    className: "text-blue-500 dark:text-blue-500",
  },
];

export default Home;
