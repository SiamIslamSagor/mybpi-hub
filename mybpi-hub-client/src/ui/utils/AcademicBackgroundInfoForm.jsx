/* eslint-disable react/prop-types */
import { Button, Select, SelectItem } from "@nextui-org/react";
import { BottomGradient } from "./BottomGradient";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LabelInputContainer } from "./LabelInputContainer";
import { cn } from "../../utils/cn";
import CustomSelect from "../components/ui/custom-select";

const AcademicBackgroundInfoForm = ({
  handleStepIncrease,
  formClassName,
  className,
}) => {
  const allBoardsOfEducation = [
    "Dhaka",
    "Rajshahi",
    "Comilla",
    "Jessore",
    "Chittagong",
    "Barisal",
    "Sylhet",
    "Dinajpur",
    "Madrasah",
  ];

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    handleStepIncrease();
  };

  return (
    <div className={cn(className)}>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Enhance Your Profile{" "}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mb-5 dark:text-neutral-300 tracking-tighter">
        Sharing your program or department helps us tailor your experience and
        connect you with relevant resources.
      </p>
      <form className={cn("my-4", formClassName)} onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4 ">
          <Label htmlFor="Previous School/Collage Name">
            Previous School/Collage Name
          </Label>
          <Input placeholder="Mirzapur High School, Manda" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Board_of_Education">Board of Education</Label>
          <CustomSelect
            id={"Board_of_Education"}
            placeholder={"Select Education Board"}
            items={allBoardsOfEducation}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Examination Passed">Examination Passed</Label>
          <Input placeholder="SSC, HSC" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Year of Passing">Year of Passing</Label>
          <Input placeholder="2021" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Roll Number">Roll Number</Label>
          <Input placeholder="623829" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="GPA/Percentage">GPA/Percentage</Label>
          <Input placeholder="4.13" type="number" />
        </LabelInputContainer>

        <Button
          className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Next &rarr;
          <BottomGradient />
        </Button>
      </form>
    </div>
  );
};

export default AcademicBackgroundInfoForm;
