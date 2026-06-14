"use client";

const Button = function ({ onHandleFilter, activeFilter }) {
  return (
    <>
      <button
        className={`py-2 px-5 flex ${activeFilter === "all" ? "bg-primary-800" : "hover:bg-gray-800"}`}
        onClick={() => {
          onHandleFilter("all");
        }}
      >
        All Cabins
      </button>
      <button
        className={`py-2 px-5 flex ${activeFilter === "small" ? "bg-primary-800" : "hover:bg-gray-800 "}`}
        onClick={() => onHandleFilter("small")}
      >
        Small Cabins
      </button>
      <button
        className={`py-2 px-5  flex ${activeFilter === "medium" ? "bg-primary-800" : "hover:bg-gray-800"}`}
        onClick={() => onHandleFilter("medium")}
      >
        Medium Cabins
      </button>
      <button
        className={`py-2 px-5  flex ${activeFilter === "big" ? "bg-primary-800" : "hover:bg-gray-800"}`}
        onClick={() => onHandleFilter("big")}
      >
        Big Cabins
      </button>
    </>
  );
};

export default Button;
