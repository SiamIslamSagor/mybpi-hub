/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { Label } from "../components/ui/label";
import { cn } from "../../utils/cn";
import { BottomGradient } from "./BottomGradient";
import { Input } from "../components/ui/input";
import { LabelInputContainer } from "./LabelInputContainer";
import { useForm } from "react-hook-form";
import studentVerify from "../../feature";

const StudentVerify = ({ className, setIsVerifiedStudent }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    const verified = studentVerify(data.roll_number, data.registration_number);

    console.log("isVerifiedStudent? ", verified);
    if (verified) setIsVerifiedStudent(true);
  };

  return (
    <div className={cn(className)}>
      <div className="max-w-sm w-full mx-auto rounded-2xl p-4 sm:p-8 shadow-xl border bg-white dark:bg-black">
        <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
          Please verify
        </h2>
        <p className="text-neutral-600 text-sm max-w-sm mb-5 dark:text-neutral-300 tracking-wide">
          To proceed to the next step, please verify that you are a student of
          BPI{" "}
        </p>
        <form className={cn("")} onSubmit={handleSubmit(onSubmit)}>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="Roll Number">Roll Number</Label>
            <Input
              placeholder="620***"
              type="number"
              {...register("roll_number", { required: true })}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="Registration Number">Registration Number</Label>
            <Input
              placeholder="150217****"
              type="number"
              {...register("registration_number", { required: true })}
            />
          </LabelInputContainer>

          <Button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
            size="lg"
          >
            Verify &rarr;
            <BottomGradient />
          </Button>
        </form>{" "}
      </div>
    </div>
  );
};

export default StudentVerify;
