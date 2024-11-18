import Image from "next/image";
import React from "react";
import Button from "../ui/Button";
import { useDispatch } from "react-redux";
import { retake_action } from "@/store/actions/quiz.actions";

const Result = ({ result }) => {
    const dispatch  = useDispatch();
  // Calculate the total questions
  const totalQuestions =
    result.correct + result.not_answered + result.incorrect;

  // Calculate the percentage of correct answers
  const percentage = (result.correct / totalQuestions) * 100; // Rounded to 2 decimal places
  const isSuccess = percentage <= 60 ? false : true;
  console.log("isSuccess", isSuccess);

  return (
    <div className="flex flex-col items-center justify-center gap-6 mt-6 w-11/12 mx-auto sm:w-3/4 lg:w-2/3">
      <Image
        src={`/assets/${isSuccess ? "correct.svg" : "incorrect.svg"}`}
        width={696}
        height={23}
        alt="logo"
        className="w-[10%] h-auto"
      />
{!isSuccess && (
        <span className="text-center text-sm px-4">
       You successfully completed the Quiz but you need to
        </span>
      )}
      <Image
        src={`/assets/${
          isSuccess ? "Congratulation.svg" : "KeepPracticing.svg"
        }`}
        width={127}
        height={50}
        alt="logo"
        className="w-1/3 h-auto"
      />
      {isSuccess && (
        <span className="text-center text-sm px-4">
          You successfully completed the Quiz and hold
        </span>
      )}
      <div
        className={`flex flex-col justify-center items-center w-[189px]  sm:w-[200px]  lg:w-[215px]  ${
          !isSuccess
            ? "rounded-full border border-[#D2829A] h-[189px] sm:h-[200px] lg:h-[215px]"
            : "h-auto"
        }`}
      >
        <span className="text-sm sm:text-3xl">Your Score</span>
        <span
          className={`text-lg sm:text-5xl font-bold ${
            isSuccess ? "text-green-600" : "text-[#AF9B06]"
          }`}
        >
          {percentage}%
        </span>
        {isSuccess && <span className={`text-sm sm:text-2xl`}>Great Job!</span>}
      </div>

      <div
        className={`flex flex-col justify-center items-center w-full sm:w-[400px] lg:w-[450px] rounded-sm border border-[#D2829A] p-4`}
      >
        <span className="text-sm sm:text-xl">Out of 10 Questions</span>
        <div className="flex gap-4 flex-wrap justify-center">
          <div className="flex gap-2">
            <span className="text-[#06AF52] font-bold">{result?.correct}</span>{" "}
            <span>correct</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#AF0606] font-bold">
              {result?.incorrect}
            </span>{" "}
            <span>incorrect</span>
          </div>
          <div className="flex gap-2">
            <span className="text-[#682121] font-bold">
              {result?.not_answered}
            </span>{" "}
            <span>Not answered</span>
          </div>
        </div>
      </div>

      <Button
        text={"Retake Quiz"}
        onClick={() => { dispatch(retake_action())}}
        color="border"
        className="mt-2 w-full sm:w-auto"
      />
    </div>
  );
};

export default Result;
