import React, { useState } from "react";
import dashboard from "@/styles/components/dashboard.module.css";
import Image from "next/image";
import Modal from "../ui/Modal";
import QuizRules from "./QuizRules";
import { quizRules } from "@/constants/rules";

const Intro = () => {
  const [isOpen, SetIsOpen] = useState(false);
  
  return (
    <>
      <div className={dashboard.dashboardTitle}>
        <span className={dashboard.dashboardHeading}>Welcome to</span>
        <Image
          src="/assets/logo.svg"
          width={127} // Base width for small screens
          height={100} // Base height for small screens
          className={dashboard.dashboardLogo} // Adjusts the width at different screen sizes
          alt="Logo"
          style={{width:"auto",height:"auto"}}
        />
      </div>

      <div className={dashboard.dashboardContainer}>
        <span className={dashboard.dashboardDescription}>
          Please read all the rules about this quiz before you start.
        </span>
        <div
          className={dashboard.dashboardLink}
          onClick={() => {
            SetIsOpen(true);
          }}
        >
          Quiz rules
        </div>
      </div>
      <Modal
        title={"Quiz rules"}
        isOpen={isOpen}
        onClose={() => {
          SetIsOpen(false);
        }}
      >
        <QuizRules quizRules={quizRules}/>
      </Modal>
    </>
  );
};

export default Intro;
