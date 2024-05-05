/* eslint-disable react/prop-types */
import { useCallback, useEffect, useRef, useState } from "react";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { LabelInputContainer } from "./LabelInputContainer";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";

const CaptchaValidation = ({ isVerifyBtnDisabled, setIsVerifyBtnDisabled }) => {
  const [userInput, setUserInput] = useState("");
  const inputRef = useRef(null);

  const handleUserInput = e => {
    setUserInput(e.target.value);
  };

  // captcha

  const handleValidateCaptcha = useCallback(() => {
    if (validateCaptcha(userInput) === true) {
      console.log("Captcha Matched");
      setIsVerifyBtnDisabled(false);
    } else {
      console.log("Captcha Does Not Match");
      console.log("Please enter the correct CAPTCHA code.");
    }
  }, [userInput, setIsVerifyBtnDisabled]);

  const handleUserFinishedTyping = useCallback(() => {
    handleValidateCaptcha();
  }, [handleValidateCaptcha]);

  useEffect(() => {
    loadCaptchaEnginge(6, "gray", "blue");
  }, []);

  useEffect(() => {
    const currentInputRef = inputRef.current;

    const handleKeyUp = event => {
      if (event.key === "Enter") {
        handleUserFinishedTyping();
      }
    };

    currentInputRef.addEventListener("keyup", handleKeyUp);

    return () => {
      currentInputRef.removeEventListener("keyup", handleKeyUp);
    };
  }, [handleUserFinishedTyping]);

  return (
    <>
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
    </>
  );
};

export default CaptchaValidation;
