/* eslint-disable react/prop-types */
import { Button, Select, SelectItem } from "@nextui-org/react";
import { BottomGradient } from "./BottomGradient";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LabelInputContainer } from "./LabelInputContainer";
import { cn } from "../../utils/cn";
import CustomSelect from "../components/ui/custom-select";

const EnrollmentInfoForm = ({
  handleStepIncrease,
  formClassName,
  className,
}) => {
  const allDepartments = [
    "Architecture",
    "Automobile",
    "Computer Science & Technology",
    "Civil",
    "Electronics",
    "Electrical",
    "Mechanical",
    "Surveying",
    "Apparel Manufacturing",
    "Textile engineering",
  ];

  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
    handleStepIncrease();
  };

  return (
    <div className={cn(className)}>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Verify Your BPI Affiliation{" "}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mb-5 dark:text-neutral-300 tracking-tighter">
        Provide additional details to help us confirm your status as a BPI
        student, faculty member, or alumnus/alumna{" "}
      </p>
      <form className={cn("my-4", formClassName)} onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Department of Study">Department of Study</Label>
          <CustomSelect
            id={"Department of Studyo"}
            items={allDepartments}
            placeholder={"Select Your Department"}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Enrollment Year">Enrollment Year</Label>
          <Input placeholder="2022" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Student Id">Student Id</Label>
          <Input placeholder="2122CMT084" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Current Semester">Current Semester</Label>
          <Input placeholder="7th" type="text" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Diploma Completed">Diploma Completed</Label>
          <CustomSelect
            items={["Completed", "In Progress"]}
            placeholder={"Diploma Status"}
          />{" "}
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

export default EnrollmentInfoForm;
