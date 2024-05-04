/* eslint-disable react/prop-types */
import { Select, SelectItem } from "@nextui-org/react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { useState } from "react";
import { cn } from "../../../utils/cn";

const CustomSelect = ({ items, placeholder, id }) => {
  const radius = 100; // change this to increase the radius of the hover effect
  const [visible, setVisible] = useState(false);

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }) {
    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }
  return (
    <motion.div
      style={{
        background: useMotionTemplate`
      radial-gradient(
        ${visible ? radius + "px" : "0px"} circle at ${mouseX}px ${mouseY}px,
        var(--blue-500),
        transparent 80%
      )
    `,
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
      className="p-[2px] rounded-lg transition duration-300 group/input "
    >
      <Select
        id={id}
        aria-label={placeholder}
        radius="sm"
        placeholder={placeholder}
        classNames={
          (`!flex !h-10 !w-full !rounded-none !border-none !bg-gray-50 !dark:bg-zinc-800 !text-black !dark:text-white !shadow-input !rounded-md !px-3 !py-2 !text-sm  !file:border-0 !file:bg-transparent 
        !file:text-sm !file:font-medium !placeholder:text-neutral-400 !dark:placeholder-text-neutral-600 
        !focus-visible:outline-none !focus-visible:ring-[2px]  !focus-visible:ring-neutral-400 !dark:focus-visible:ring-neutral-600
         !disabled:cursor-not-allowed !disabled:opacity-50
         !dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]
         !group-hover/input:shadow-none !transition !duration-400
         `,
          "",
          {
            base: cn(
              "inline-flex m-0 bg-gray-50 dark:bg-zinc-800 placeholder:text-neutral-400 dark:placeholder-text-neutral-600 focus-visible:outline-none focus-visible:ring-[2px]  focus-visible:ring-neutral-400 dark:focus-visible:ring-neutral-600  disabled:cursor-not-allowed disabled:opacity-50 dark:shadow-[0px_0px_1px_1px_var(--neutral-700)]  group-hover/input:shadow-none transition duration-400 text-black dark:text-white shadow-input  justify-between",
              "flex-row-reverse max-w-full cursor-pointer rounded-lg gap-4 "
            ),
          })
        }
      >
        {items?.map(item => (
          <SelectItem key={item}>{item}</SelectItem>
        ))}
      </Select>
    </motion.div>
  );
};

export default CustomSelect;
