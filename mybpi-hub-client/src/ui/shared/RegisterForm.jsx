/* eslint-disable react/prop-types */
import { Tooltip } from "@nextui-org/react";
import { useState } from "react";
import { CiCircleInfo } from "react-icons/ci";
import { IoIosArrowRoundBack } from "react-icons/io";
import { cn } from "../../utils/cn";
import AcademicBackgroundInfoForm from "../utils/AcademicBackgroundInfoForm";
import ContactAndSocialInfoForm from "../utils/ContactAndSocialInfoForm";
import EnrollmentInfoForm from "../utils/EnrollmentInfoForm";
import LoginInfoForm from "../utils/LoginInfoForm";
import PersonalInfoForm from "../utils/PersonalInfoForm";

export function RegisterForm() {
  const [steps, setSteps] = useState([1]);

  const handleStep = step => {
    if (step > steps.length) {
      alert("Please Complete the current step");
      return;
    }
    const currentStep = new Array(step).fill(1);
    setSteps(currentStep);
  };

  const handleStepDecrease = () => {
    if (steps.length <= 1) return;
    const step = steps.length - 1;
    const currentStep = new Array(step).fill(1);
    setSteps(currentStep);
  };

  const handleStepIncrease = () => {
    if (steps.length >= 5) return;

    const step = steps.length + 1;
    const currentStep = new Array(step).fill(1);
    setSteps(currentStep);
  };

  return (
    <div className="max-w-md w-full mx-auto rounded-2xl p-4 md:p-8 shadow-xl border bg-white dark:bg-black">
      <div className="flex items-center justify-between">
        <IoIosArrowRoundBack
          onClick={handleStepDecrease}
          className={cn(
            "text-3xl dark:text-neutral-400 text-neutral-700 cursor-pointer",
            steps.length === 1 && "hidden"
          )}
        />
        <CiCircleInfo className="text-3xl dark:text-neutral-400 text-neutral-700" />
      </div>
      <div className="w-full flex gap-2">
        <Tooltip
          delay={0}
          closeDelay={0}
          showArrow={true}
          content={"Personal Information"}
        >
          <div
            onClick={() => handleStep(1)}
            className="w-full border-y-[12px] border-transparent cursor-pointer"
          >
            <div
              className={cn(
                "min-h-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-2xl duration-1000",
                steps[0] === 1 ? "bg-black dark:bg-neutral-300" : ""
              )}
            ></div>
          </div>
        </Tooltip>
        <Tooltip
          showArrow={true}
          content={"Contact Information & Social Links"}
        >
          <div
            onClick={() => handleStep(2)}
            className="w-full border-y-[12px] border-transparent cursor-pointer"
          >
            <div
              className={cn(
                "min-h-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-2xl duration-1000",
                steps[1] === 1 ? "bg-black dark:bg-neutral-300" : ""
              )}
            ></div>
          </div>
        </Tooltip>
        <Tooltip
          delay={0}
          closeDelay={0}
          showArrow={true}
          content={"Academic Background"}
        >
          <div
            onClick={() => handleStep(3)}
            className="w-full border-y-[12px] border-transparent cursor-pointer"
          >
            <div
              className={cn(
                "min-h-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-2xl duration-1000",
                steps[2] === 1 ? "bg-black dark:bg-neutral-300" : ""
              )}
            ></div>
          </div>
        </Tooltip>
        <Tooltip
          delay={0}
          closeDelay={0}
          showArrow={true}
          content={"Enrollment Information"}
        >
          <div
            onClick={() => handleStep(4)}
            className="w-full border-y-[12px] border-transparent cursor-pointer"
          >
            <div
              className={cn(
                "min-h-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-2xl duration-1000",
                steps[3] === 1 ? "bg-black dark:bg-neutral-300" : ""
              )}
            ></div>
          </div>
        </Tooltip>
        <Tooltip
          delay={0}
          closeDelay={0}
          showArrow={true}
          content={"Login Credential"}
        >
          <div
            onClick={() => handleStep(5)}
            className="w-full border-y-[12px] border-transparent cursor-pointer"
          >
            <div
              className={cn(
                "min-h-1 w-full bg-neutral-200 dark:bg-neutral-700 rounded-2xl duration-1000",
                steps[4] === 1 ? "bg-black dark:bg-neutral-300" : ""
              )}
            ></div>
          </div>
        </Tooltip>
      </div>
      {/* <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Welcome to MyBPI HUB
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mb-5 dark:text-neutral-300 tracking-tighter">
        Sign up to collaborate with colleagues and connect with BPI students.
      </p> */}

      {/* <form className="my-4" onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input id="firstname" placeholder="Selim" type="text" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input id="lastname" placeholder="Reja" type="text" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-2 mb-4">
          <LabelInputContainer>
            <Label htmlFor="date_of_birth">Date of Birth</Label>
            <Input type="date" id="date" placeholder="date of birth" />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="religion">Religion</Label>
            <Input id="religion" placeholder="Islam" type="text" />
          </LabelInputContainer>
        </div>
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
          <RadioGroup className="w-full">
            <LabelInputContainer>
              <Label htmlFor="gender">Gender</Label>

              <div className="flex gap-2">
                <CustomRadio className={"w-full"} value="male">
                  Male
                </CustomRadio>
                <CustomRadio className={"w-full"} value="female">
                  Female
                </CustomRadio>
              </div>
            </LabelInputContainer>
          </RadioGroup>
        </div>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="Nationality">Nationality</Label>
          <Input placeholder="Bangladeshi" type="text" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-4">
          <Label htmlFor="Present Address">Present Address</Label>
          <Input
            placeholder="Sylhet Sadar Upazila, Bangladesh
"
            type="text"
          />
        </LabelInputContainer>
        <Button
          onClick={handleStepIncrease}
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Next &rarr;
          <BottomGradient />
        </Button>
      </form> */}
      <>
        {/* {steps.length === 1 ? (
          <PersonalInfoForm handleStepIncrease={handleStepIncrease} />
        ) : (
          <div>this is second part of registration</div>
        )} */}
        <PersonalInfoForm
          className={steps.length !== 1 ? "hidden" : "block"}
          handleStepIncrease={handleStepIncrease}
        />
        <ContactAndSocialInfoForm
          className={steps.length !== 2 ? "hidden" : "block"}
          handleStepIncrease={handleStepIncrease}
        />
        <AcademicBackgroundInfoForm
          className={steps.length !== 3 ? "hidden" : "block"}
          handleStepIncrease={handleStepIncrease}
        />
        <EnrollmentInfoForm
          className={steps.length !== 4 ? "hidden" : "block"}
          handleStepIncrease={handleStepIncrease}
        />
        <LoginInfoForm
          className={steps.length !== 5 ? "hidden" : "block"}
          handleStepIncrease={handleStepIncrease}
        />
      </>
    </div>
  );
}
