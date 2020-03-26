import React from "react";
import "../styles/Home.sass";

const Home = () => {
  const description = "Drawing & Print - level I";
  let delay = 0.1;
  const letters = [...description].map(letter => {
    delay += 0.1;
    return (
      <span
        className="letter"
        key={delay}
        style={{ animationDelay: `${delay}s` }}
      >
        {letter}
      </span>
    );
  });
  return (
    <section className="mainSection homeSection">
      <h1>Magdalen Dolatowska</h1>
      <h2>{letters}</h2>
    </section>
  );
};

export default Home;
