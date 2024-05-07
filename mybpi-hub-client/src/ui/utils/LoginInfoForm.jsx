/* eslint-disable react/prop-types */
import { Button } from "@nextui-org/react";
import { BottomGradient } from "./BottomGradient";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LabelInputContainer } from "./LabelInputContainer";
import { cn } from "../../utils/cn";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";
import { useCallback, useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { FiEdit3 } from "react-icons/fi";
import CaptchaValidation from "./CaptchaValidation";

const LoginInfoForm = ({ handleStepIncrease, formClassName, className }) => {
  // hooks
  const { register, handleSubmit } = useForm();

  const [isVerifyBtnDisabled, setIsVerifyBtnDisabled] = useState(true);

  const onSubmit = data => {
    // handleStepIncrease();
    console.log("Form submitted");
    console.log(data);
  };

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   console.log("Form submitted");
  //   handleStepIncrease();
  // };

  return (
    <div className={cn(className)}>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Unlock Your Personalized MyBPI Hub
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm dark:text-neutral-300 tracking-tighter">
        Create your login credentials to access all the app&apos;s features and
        benefits.
      </p>
      <form
        className={cn("my-4", formClassName)}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className=" mb-4 flex items-center justify-center">
          <div className="relative overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              alt="user image"
              className="size-28 rounded-full cursor-pointer"
            />
            <span className="absolute bottom-0 right-0 flex items-center gap-1 shadow-input rounded-md bg-gray-100 dark:bg-neutral-600 dark:text-white scale-80 p-1">
              {"commit "}
              <FiEdit3 />
              <span className="text-sm">Edit</span>
            </span>
            <input
              className="border cursor-pointer absolute top-0 file:cursor-pointer bg-red-300 p-2 opacity-0 size-28"
              type="file"
              {...register("user_pic", { required: true })}
            />
          </div>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Email Address">Email Address</Label>
          <Input placeholder="selimmahmud18@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Password">Password</Label>
          <Input placeholder="Between 8 and 32 characters" type="password" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Confirm Password">Confirm Password</Label>
          <Input placeholder="Enter your password again" type="password" />
        </LabelInputContainer>

        <CaptchaValidation
          isVerifyBtnDisabled={isVerifyBtnDisabled}
          setIsVerifyBtnDisabled={setIsVerifyBtnDisabled}
        />

        <Button
          disabled={isVerifyBtnDisabled}
          className="bg-gradient-to-br relative group/btn disabled:opacity-50 disabled:pointer-events-none disabled:hover:opacity-50 disabled:cursor-not-allowed from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Next &rarr;
          <BottomGradient />
        </Button>
      </form>
    </div>
  );
};

export default LoginInfoForm;
