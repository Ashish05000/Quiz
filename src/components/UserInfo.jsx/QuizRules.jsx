import React from "react";
import styles from "./QuizRules.module.css"; // Importing the CSS module

const QuizRules = ({ quizRules }) => {
  return (
    <div className={styles.container}>
      {quizRules?.map((item) => {
        return (
          <div key={item.title} className={styles.ruleItem}>
            {/* Rule Title */}
            <div className={styles.ruleTitle}>
              {item?.title}
            </div>
            {/* Rule Description with Sublist */}
            <ul className={styles.ruleList}>
              {item?.rules?.map((rule, index) => {
                if (Array.isArray(rule)) {
                  // Parent item without bullet point
                  return (
                    <li key={index} className={styles.parentListItem}>
                      <ul className={styles.subList}>
                        {rule.map((subRule, subIndex) => (
                          <li key={subIndex} className={styles.subListItem}>
                            {subRule}
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                // Normal List Item with bullet point
                return (
                  <li key={index} className={styles.listItem}>
                    {rule}
                  </li>
                );
              })}
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default QuizRules;
