import React from "react";
import s from "./AboutPage.module.css";

const AboutPage = () => {
  return (
    <div className={s.container}>
      <div className={s.cardAbout}></div>
      <div className={s.description}>
        <p>
          Pokémon are mysterious creatures filled with many secrets. Some
          Pokémon live alongside humans and some live in the wild in grassy
          fields, caves, or the sea, but much about their ecology that remains
          unknown. One of their main features is that they can be caught using a
          Poké Ball, which allows them to be carried around.
        </p>
      </div>
    </div>
  );
};

export default AboutPage;
