import React, { useState, useEffect } from "react";
import LabelInput from "../Inputs/LabelInput";
import RadioGroup from "../Inputs/RadioGroup";
import Button from "../ui/Button";
import { useRouter } from "next/router";

import { saveUserInfo_action } from "@/store/actions/user.actions";
import { useDispatch } from "react-redux";

const Userform = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  // State to track selected option
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  // State to track form input
  const [formData, setFormData] = useState({ name: "" });

  const options = [
    { value: "js_basics", label: "Javascript Basic" },
    { value: "react_basics", label: "React.Js Basic" },
    { value: "angular_basics", label: "Angular Basic" },
    { value: "flutter_basics", label: "Flutter" },
  ];
  const handleAnswerChange = (value) => {
    setSelectedAnswer(value);
    console.log("Selected Answer:", value);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Disable button if the name or answer is not filled
  const isButtonDisabled = !formData.name || !selectedAnswer;
  const handleFormSubmit = () => {
    console.log("Form Submitted with selected answer:", {
      selectedAnswer,
      formData,
    });
    // localStorage.setItem("subject", selectedAnswer); // Save the selected answer to localStorage
    // router.push("/quiz");
    dispatch(
      saveUserInfo_action({ username: formData.name, subject: selectedAnswer })
    );
  };

  return (
    <div className="my-8">
      <LabelInput
        label="Full name"
        name="name"
        value={formData.name}
        onChange={handleInputChange}
        placeholder="Enter your name"
      />

      <label className="text-sm md:text-base font-medium text-gray-700 mb-2 block">
        Please select topic to continue
      </label>
      <RadioGroup
        question=""
        options={options}
        name="quiz-question"
        onChange={handleAnswerChange}
      />

      <Button
        text="Start Quiz"
        onClick={handleFormSubmit}
        color="primary"
        size="medium"
        className="mt-8"
        disabled={isButtonDisabled}
      />
    </div>
  );
};

export default Userform;
