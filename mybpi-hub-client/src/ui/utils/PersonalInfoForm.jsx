/* eslint-disable react/prop-types */
import { Button, RadioGroup } from "@nextui-org/react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { BottomGradient } from "./BottomGradient";
import { LabelInputContainer } from "./LabelInputContainer";
import { CustomRadio } from "../components/ui/custom-radio";
import { cn } from "../../utils/cn";

const PersonalInfoForm = ({ handleStepIncrease, className }) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <form className={cn("my-4", className)} onSubmit={handleSubmit}>
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
    </form>
  );
};

export default PersonalInfoForm;
