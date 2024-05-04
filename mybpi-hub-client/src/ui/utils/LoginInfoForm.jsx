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
import { useEffect, useRef, useState } from "react";
import { FiEdit3 } from "react-icons/fi";

const LoginInfoForm = ({ handleStepIncrease, formClassName, className }) => {
  const [userInput, setUserInput] = useState("");
  const [isVerifyBtnDisabled, setIsVerifyBtnDisabled] = useState(true); // Initially disabled
  const inputRef = useRef(null);
  const [isValidated, setIsValidated] = useState(false); // Initially not validated

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    handleStepIncrease();
  };

  const handleUserInput = e => {
    setUserInput(e.target.value);
  };

  const handleValidateCaptcha = () => {
    if (validateCaptcha(userInput) === true) {
      console.log("Captcha Matched");
      setIsVerifyBtnDisabled(false); // Enable submission if valid
      setIsValidated(true); // Set validated state
    } else {
      console.log("Captcha Does Not Match");
      alert("Please enter the correct CAPTCHA code.");
      setIsValidated(false); // Reset validated state on failure
    }
  };

  const handleUserFinishedTyping = () => {
    handleValidateCaptcha(); // Call validation on completion
  };

  // Load the CAPTCHA engine initially
  useEffect(() => {
    loadCaptchaEnginge(6, "gray", "blue");
  }, []);

  useEffect(() => {
    const handleKeyUp = event => {
      if (event.key === "Enter") {
        // Replace with your desired completion key
        handleUserFinishedTyping();
      }
    };

    inputRef.current.addEventListener("keyup", handleKeyUp);

    return () => {
      inputRef.current.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleUserFinishedTyping]);

  return (
    <div className={cn(className)}>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Unlock Your Personalized MyBPI Hub
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm dark:text-neutral-300 tracking-tighter">
        Create your login credentials to access all the app&apos;s features and
        benefits.
      </p>
      <form className={cn("my-4", formClassName)} onSubmit={handleSubmit}>
        {/* <label
          className="text-sm bg-stone-200 hover:bg-stone-300"
          htmlFor="fileUpload"
        >
          <input
            className="flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
            id="picture"
            name="picture"
            type="file"
          />
        </label> */}
        <div className=" mb-4 flex items-center justify-center">
          <div className="relative overflow-hidden">
            <img
              src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg"
              alt="user image"
              className="size-24 rounded-full"
            />
            <span className="absolute bottom-0 right-0 flex items-center gap-1 shadow-input rounded-md bg-gray-100 dark:bg-neutral-600 dark:text-white scale-80 p-1">
              {" "}
              <FiEdit3 />
              <span className="text-sm">Edit</span>
            </span>
            <input
              className="border absolute top-0  bg-red-300 p-2 opacity-0 size-24"
              type="file"
              name="user_pic"
              id=""
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
        <LabelInputContainer
          className={`mb-4 ${isVerifyBtnDisabled ? "" : "hidden"}`}
        >
          <div className="*:!flex *:flex-col">
            <LoadCanvasTemplate reloadText="Reload My Captcha" />
          </div>
        </LabelInputContainer>
        <LabelInputContainer
          className={`mb-4 ${isVerifyBtnDisabled ? "" : "hidden"}`}
        >
          <Label htmlFor="Match Captcha">Match Captcha</Label>
          <Input
            placeholder="type captcha character here"
            type="text"
            value={userInput}
            onChange={handleUserInput}
            onBlur={() => {
              handleUserFinishedTyping();
            }}
            ref={inputRef}
          />
        </LabelInputContainer>

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
