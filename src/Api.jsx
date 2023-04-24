const questions = [
  {
    id: 1,
    question: "What is the virtual DOM?",
    answer: "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects.",
  },
  {
    id: 2,
    question: "How do you create a React app?",
    answer: "These are the steps for creating a React app. Install NodeJS on the computer because we need npm to install the React library. Npm is the node package manager that contains many JavaScript libraries, including React.",
  },
  {
    id: 3,
    question: "What is an event in React?",
    answer: "An event is an action that a user or system may trigger, such as pressing a key, a mouse click, etc. React events are named using camelCase, rather than lowercase in HTML. With JSX, you pass a function as the event handler, rather than a string in HTML.",
  },
  {
    id: 4,
    question: "Why is there a need for using keys in Lists?",
    answer: "Keys are very important in lists for the following reasons -> A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists. It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered",
  },
  {
    id: 5,
    question: "What are forms in React?",
    answer: "React employs forms to enable users to interact with web applications.Using forms, users can interact with the application and enter the required information whenever needed. Form contain certain elements, such as text fields, buttons, checkboxes, radio buttons, etc. Forms are used for many different tasks such as user authentication, searching, filtering, indexing, etc.",
  },
  {
    id: 6,
    question: "What is an arrow function and how is it used in React?",
    answer: "An arrow function is a short way of writing a function to React.It is unnecessary to bind ‘this’ inside the constructor when using an arrow function. This prevents bugs caused by the use of ‘this’ in React callbacks.",
  },
  {
    id: 7,
    question: "What are the components in React?",
    answer: "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately.",
  },
  {
    id: 8,
    question: "What is a state in React?",
    answer: "The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders.The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.",
  },
  {
    id: 9,
    question: "What are props in React?",
    answer: "Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes.Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.",
  },
  {
    id: 10,
    question: "What is a higher-order component in React?",
    answer: "A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic. ",
  },
  
];

export default questions;
