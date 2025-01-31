import React from "react";

const Pagination = ({handleBack,handleFWD,pageNo}) => {
  return (
    <div className="bg-gray-200 p-4 mt-5 flex justify-center">
      <div className="px-8" onClick={handleBack}>
        <i class="fa-solid fa-arrow-left"></i>
      </div>
      <div>{pageNo}</div>
      <div className="px-8" onClick={handleFWD}>
        <i class="fa-solid fa-arrow-right"></i>
      </div>
    </div>
  );
};

export default Pagination;
