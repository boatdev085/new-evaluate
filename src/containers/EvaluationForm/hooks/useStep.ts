import React from "react";
const useStep = () => {
  const [step, setStep] = React.useState(0);
  const next = () => {
    setStep(step + 1);
  };
  const prev = () => {
    setStep(step - 1);
  };
  return {
    step,
    next,
    prev,
  };
};

export default useStep;
