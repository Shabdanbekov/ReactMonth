import React from "react";

const Pagination = ({ page, handleNext, handlePrev }) => {
  return (
    <div>
      <button onClick={handlePrev}>Prev</button>
      {page} / 129
      <button onClick={handleNext}>Next</button>
    </div>
  );
};

export default Pagination;
