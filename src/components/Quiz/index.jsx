import { useState, useMemo, useEffect } from "react";
import { QuizConstants } from "@/constants/QuizConstants";
import RadioGroup from "@/components/Inputs/RadioGroup";
import Button from "../ui/Button";
import styles from "./Quiz.module.css";
import ProgressBar from "../ui/ProgressBar";
import { formatTime } from "@/constants/functions";
import { useDispatch, useSelector } from "react-redux";
import { quizResult_action } from "@/store/actions/quiz.actions";

const Quiz = ({ userInfo }) => {
  const dispatch = useDispatch();
  const { result } = useSelector((state) => state.userInfo);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [skipped, setSkipped] = useState(0);
  const [timer, setTimer] = useState(10); // Timer state for each question
  const [timerRunning, setTimerRunning] = useState(true); // Flag to control the timer

  // Memoize the current category and current question to avoid unnecessary re-computations
  const currentCategory = useMemo(
    () =>
      QuizConstants?.categories.find(
        (category) => category.id === userInfo?.subject
      ),
    [userInfo?.subject]
  );

  // Handle case where subject is not found
  if (!currentCategory) {
    return <div>Invalid subject selected.</div>;
  }

  const currentQuestion = currentCategory?.questions[currentQuestionIndex];

  // Handle answer selection
  const handleAnswer = (answer) => setUserAnswer(answer);

  // Handle confirmation of the selected answer
  const handleConfirm = () => {
    if (userAnswer[0] === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setConfirmed(true);
    setTimerRunning(false); // Stop the timer when confirmed
  };

  // Handle skipping to the next question
  const handleSkip = () => {
    setSkipped(skipped + 1);
    setTimerRunning(false); // Stop the timer when skipped
    handleNextQuestion();
  };

  // Handle moving to the next question
  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < currentCategory.questions.length) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setUserAnswer("");
      setConfirmed(false);
      setTimer(10); // Reset timer for the next question
      setTimerRunning(true); // Start the timer again
    } else {
      dispatch(
        quizResult_action({
          correct: score,
          not_answered: skipped,
          incorrect: currentCategory.questions.length - score - skipped,
        })
      );
    }
  };

  // Timer effect for counting down
  useEffect(() => {
    if (timer === 0 && timerRunning) {
      handleSkip(); // Skip question automatically if time runs out and timer is running
    }

    const interval = setInterval(() => {
      if (timer > 0 && timerRunning) {
        setTimer((prev) => prev - 1);
      }
    }, 1000);

    return () => clearInterval(interval); // Clean up the interval on unmount
  }, [timer, timerRunning]);

  // Conditional CSS class for timer
  const timerClass = timer < 5 ? "text-red-600" : "text-black";
  console.log("selector", result);
  return (
    <div className="flex flex-col items-center mt-6 w-3/4 mx-auto">
      <div className="flex justify-between w-full mb-2">
        <div className="text-sm sm:text-base">
          <span className="text-[#B92B5D] text-lg">
            {currentQuestionIndex + 1}
          </span>
          /{currentCategory.questions.length}
        </div>
        <div
          className={`bg-gray-300 flex  justify-center items-center h-8 w-16 rounded-md text-sm sm:text-base ${timerClass}`}
        >
          {formatTime(timer)}
        </div>
      </div>

      {/* ProgressBar */}
      <ProgressBar
        progress={(currentQuestionIndex + 1) * 10}
        height="h-2"
        width="w-full"
      />

      <div className={styles.quizContainer}>
        <p className="text-lg font-semibold mb-4 flex gap-4">
          <span>{currentQuestionIndex + 1}:</span> {currentQuestion?.question}
        </p>

        <RadioGroup
          question=""
          options={currentQuestion?.options.map((option) => ({
            label: option,
            value: option,
          }))}
          name={`question-${currentQuestionIndex}`}
          onChange={handleAnswer}
          optionClass="flex-col"
          disabled={confirmed} // Disable options after confirmation
        />

        {confirmed ? (
          <div className={styles.answerFeedback}>
            <p
              className={
                userAnswer[0] === currentQuestion.correctAnswer
                  ? "text-green-600"
                  : "text-red-600"
              }
            >
              {userAnswer[0] === currentQuestion.correctAnswer
                ? "Correct!"
                : "Incorrect!"}
            </p>
            <div className="flex justify-start gap-4 mt-4">
              <Button
                text={"Next Question"}
                onClick={handleNextQuestion}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-start gap-4 mt-4">
            <Button
              text={"Confirm"}
              onClick={handleConfirm}
              disabled={!userAnswer ? true : false}
            />
            <Button text={"Skip"} onClick={handleSkip} color="border" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Quiz;
