import React from "react";
import Api from "./Api.jsx";
import Accordion from "./Accordion.jsx";

const App = () => {

  return (
    <>
      <section className="main-div">
        <h1>React Interview Questions</h1>
        {Api.map((ele) => {
          return (
            <Accordion
              key={ele.id}
              question={ele.question}
              answer={ele.answer}
            />
          );
        })}
      </section>
    </>
  );
};

export default App;
