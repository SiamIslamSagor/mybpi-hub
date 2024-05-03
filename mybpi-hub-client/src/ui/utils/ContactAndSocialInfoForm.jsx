/* eslint-disable react/prop-types */
import { Button, RadioGroup } from "@nextui-org/react";
import { BottomGradient } from "./BottomGradient";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LabelInputContainer } from "./LabelInputContainer";
import { CustomRadio } from "../components/ui/custom-radio";
import { cn } from "../../utils/cn";

const ContactAndSocialInfoForm = ({
  handleStepIncrease,
  formClassName,
  className,
}) => {
  const handleSubmit = e => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className={cn(className)}>
      <h2 className="font-bold text-xl text-neutral-800 dark:text-neutral-200">
        Enhance Your Network{" "}
      </h2>
      <p className="text-neutral-600 text-sm max-w-sm mb-5 dark:text-neutral-300 tracking-tighter">
        Share your contact details and social links to connect with fellow BPI
        members.{" "}
      </p>
      <form className={cn("my-4", formClassName)} onSubmit={handleSubmit}>
        <LabelInputContainer className="mb-4 relative">
          <Label htmlFor="Mobile Number">Mobile Number</Label>
          <Input placeholder="XXX-NNN-NNNN" type="number" className={"pl-12"} />
          <span className="absolute bottom-[10px] left-2">+880</span>
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Alternative Phone Number">
            Alternative Phone Number (optional)
          </Label>
          <Input placeholder="+880-XXX-NNN-NNNN" type="number" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Email Address">Email Address</Label>
          <Input placeholder="selimmahmud72@gmail.com" type="email" />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Facebook Id Link">Facebook Id Link</Label>
          <Input
            placeholder="https://www.facebook.com/pro.gamar.908"
            type="url"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Linkedin Id Link">Linkedin Id Link (optional)</Label>
          <Input
            placeholder="https://www.linkedin.com/in/mdsiamofficial"
            type="url"
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="Github Account  Link">
            Github Account Link (optional)
          </Label>
          <Input placeholder="https://github.com/SiamIslamSagor" type="url" />
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
    </div>
  );
};

export default ContactAndSocialInfoForm;
