export const QuizConstants = {
    categories: [
      {
        id: "react_basics",
        name: "React Basics",
        questions: [
          {
            id: "q1",
            question: "What is the primary purpose of React?",
            options: [
              "A. To build server-side applications",
              "B. To create dynamic user interfaces",
              "C. To manage databases",
              "D. To perform network operations"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q2",
            question: "What is JSX?",
            options: [
              "A. A JavaScript framework",
              "B. A syntax extension for JavaScript",
              "C. A CSS library",
              "D. A type of API"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q3",
            question: "Which method is used to create components in React?",
            options: [
              "A. React.createElement",
              "B. React.createComponent",
              "C. React.newComponent",
              "D. React.buildComponent"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q4",
            question: "What are React components?",
            options: [
              "A. Reusable pieces of JavaScript code",
              "B. Functions that return HTML",
              "C. Independent and reusable pieces of UI",
              "D. All of the above"
            ],
            correctAnswer: "D",
            timeLimit: 10
          },
          {
            id: "q5",
            question: "What is the default way to handle state in React?",
            options: [
              "A. Using Redux",
              "B. Using Context API",
              "C. Using the useState hook",
              "D. Using global variables"
            ],
            correctAnswer: "C",
            timeLimit: 10
          },
          {
            id: "q6",
            question: "Which hook is used to perform side effects in a functional component?",
            options: [
              "A. useState",
              "B. useEffect",
              "C. useReducer",
              "D. useContext"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q7",
            question: "What is a React fragment?",
            options: [
              "A. A way to include CSS styles",
              "B. A way to return multiple elements without a parent wrapper",
              "C. A way to handle error boundaries",
              "D. A new type of React component"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q8",
            question: "What does the key prop do in React?",
            options: [
              "A. Specifies a unique identifier for an element",
              "B. Sets focus on an element",
              "C. Toggles the visibility of an element",
              "D. Provides a way to use animations"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q9",
            question: "What is the purpose of the useRef hook?",
            options: [
              "A. To manage state",
              "B. To directly access a DOM element",
              "C. To perform side effects",
              "D. To pass data between components"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q10",
            question: "Which of the following is a feature of React?",
            options: [
              "A. Virtual DOM",
              "B. Server-Side Rendering",
              "C. Component-based architecture",
              "D. All of the above"
            ],
            correctAnswer: "D",
            timeLimit: 10
          }
        ]
      },
      {
        id: "js_basics",
        name: "JavaScript Basics",
        questions: [
          {
            id: "q1",
            question: "What is the correct syntax for referring to an external script called 'script.js'?",
            options: [
              "A. <script name='script.js'>",
              "B. <script href='script.js'>",
              "C. <script src='script.js'>",
              "D. <script file='script.js'>"
            ],
            correctAnswer: "C",
            timeLimit: 10
          },
          {
            id: "q2",
            question: "Which company developed JavaScript?",
            options: [
              "A. Microsoft",
              "B. Netscape",
              "C. Google",
              "D. Mozilla"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q3",
            question: "What is the output of the following: `console.log(typeof null)`?",
            options: [
              "A. 'null'",
              "B. 'undefined'",
              "C. 'object'",
              "D. 'string'"
            ],
            correctAnswer: "C",
            timeLimit: 10
          },
          {
            id: "q4",
            question: "Which of the following is a valid way to declare a variable in JavaScript?",
            options: [
              "A. var x = 10;",
              "B. let x = 10;",
              "C. const x = 10;",
              "D. All of the above"
            ],
            correctAnswer: "D",
            timeLimit: 10
          },
          {
            id: "q5",
            question: "Which method can be used to combine two arrays in JavaScript?",
            options: [
              "A. Array.concat()",
              "B. Array.append()",
              "C. Array.push()",
              "D. Array.join()"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q6",
            question: "What is the purpose of the `isNaN` function in JavaScript?",
            options: [
              "A. To check if a value is null",
              "B. To check if a value is a string",
              "C. To check if a value is not a number",
              "D. To check if a value is NaN or undefined"
            ],
            correctAnswer: "C",
            timeLimit: 10
          },
          {
            id: "q7",
            question: "What is the correct way to create a function in JavaScript?",
            options: [
              "A. function myFunction() {}",
              "B. def myFunction() {}",
              "C. create myFunction() {}",
              "D. func myFunction() {}"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q8",
            question: "Which operator is used to assign a value to a variable?",
            options: [
              "A. =",
              "B. -",
              "C. *",
              "D. x"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q9",
            question: "What is the result of `1 + '2'` in JavaScript?",
            options: [
              "A. 3",
              "B. '12'",
              "C. NaN",
              "D. Error"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q10",
            question: "What is the correct way to write an 'if' statement in JavaScript?",
            options: [
              "A. if (x === 5) {}",
              "B. if x = 5 then {}",
              "C. if x == 5 {}",
              "D. if (x = 5) {}"
            ],
            correctAnswer: "A",
            timeLimit: 10
          }
        ]
      },
      {
        id: "flutter_basics",
        name: "Flutter Basics",
        questions: [
          {
            id: "q1",
            question: "What is Flutter?",
            options: [
              "A. A web framework for building single-page applications",
              "B. An open-source UI software development toolkit",
              "C. A library for handling animations",
              "D. A database management tool"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q2",
            question: "Which programming language is primarily used with Flutter?",
            options: [
              "A. Kotlin",
              "B. Dart",
              "C. JavaScript",
              "D. Swift"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q3",
            question: "What is a Widget in Flutter?",
            options: [
              "A. A component for managing state",
              "B. The basic building block of a Flutter app's UI",
              "C. A mechanism for handling routing",
              "D. A library for networking"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q4",
            question: "Which widget is used for creating a scrollable list in Flutter?",
            options: [
              "A. Column",
              "B. ListView",
              "C. GridView",
              "D. Stack"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q5",
            question: "What does the `setState` method do in Flutter?",
            options: [
              "A. Updates the state of the widget and triggers a rebuild",
              "B. Navigates to a new screen",
              "C. Fetches data from an API",
              "D. Defines the layout of the widget"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q6",
            question: "Which of the following is true about `StatelessWidget`?",
            options: [
              "A. It can manage state changes over time",
              "B. It is immutable and does not maintain state",
              "C. It is used for creating scrollable lists",
              "D. It requires a `setState` method to update its UI"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q7",
            question: "What is the purpose of the `pubspec.yaml` file in a Flutter project?",
            options: [
              "A. To store application state",
              "B. To define project dependencies and assets",
              "C. To manage routing",
              "D. To compile Dart code"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q8",
            question: "Which widget allows you to arrange children in a horizontal or vertical direction?",
            options: [
              "A. Stack",
              "B. Column",
              "C. Row",
              "D. Both B and C"
            ],
            correctAnswer: "D",
            timeLimit: 10
          },
          {
            id: "q9",
            question: "What is the use of the `hot reload` feature in Flutter?",
            options: [
              "A. To refresh the app state",
              "B. To quickly apply code changes without restarting the app",
              "C. To update dependencies",
              "D. To optimize app performance"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q10",
            question: "Which widget is used for aligning widgets in Flutter?",
            options: [
              "A. Align",
              "B. Padding",
              "C. SizedBox",
              "D. Center"
            ],
            correctAnswer: "A",
            timeLimit: 10
          }
        ]
      },
      {
        id: "angular_basics",
        name: "Angular Basics",
        questions: [
          {
            id: "q1",
            question: "What is Angular?",
            options: [
              "A. A programming language",
              "B. A framework for building web applications",
              "C. A library for handling state",
              "D. A type of database"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q2",
            question: "Which architectural pattern does Angular follow?",
            options: [
              "A. Model-View-Controller (MVC)",
              "B. Model-View-ViewModel (MVVM)",
              "C. Observer",
              "D. Singleton"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q3",
            question: "What is the primary purpose of Angular CLI?",
            options: [
              "A. To debug Angular applications",
              "B. To scaffold and manage Angular projects",
              "C. To compile TypeScript code",
              "D. To create server-side APIs"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q4",
            question: "What is a directive in Angular?",
            options: [
              "A. A component that manages state",
              "B. A class that adds behavior to elements in your Angular application",
              "C. A library for DOM manipulation",
              "D. A module for API calls"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q5",
            question: "Which of the following is used for two-way data binding in Angular?",
            options: [
              "A. {{ }}",
              "B. [ ]",
              "C. ( )",
              "D. [( )]"
            ],
            correctAnswer: "D",
            timeLimit: 10
          },
          {
            id: "q6",
            question: "What is the purpose of NgModule in Angular?",
            options: [
              "A. To group components, directives, and pipes",
              "B. To make API calls",
              "C. To manage state",
              "D. To perform routing"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q7",
            question: "Which decorator is used to define a component in Angular?",
            options: [
              "A. @Service",
              "B. @Component",
              "C. @Directive",
              "D. @Injectable"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q8",
            question: "What is a Service in Angular?",
            options: [
              "A. A class for reusable business logic",
              "B. A way to handle routing",
              "C. A mechanism for debugging applications",
              "D. A predefined directive"
            ],
            correctAnswer: "A",
            timeLimit: 10
          },
          {
            id: "q9",
            question: "What is Dependency Injection in Angular?",
            options: [
              "A. A way to define component hierarchies",
              "B. A design pattern for managing dependencies in an application",
              "C. A tool for state management",
              "D. A library for API calls"
            ],
            correctAnswer: "B",
            timeLimit: 10
          },
          {
            id: "q10",
            question: "What is the purpose of Angular's Router?",
            options: [
              "A. To make API calls",
              "B. To navigate between views and handle URL paths",
              "C. To define components",
              "D. To manage application state"
            ],
            correctAnswer: "B",
            timeLimit: 10
          }
        ]
      }
    ]
  }