import React from "react";
import { useNavigate } from "react-router-dom";
import bgIntro from "../assets/bgIntro.png";

const IntroPage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="w-screen h-screen"
      style={{
        backgroundImage: `url(${bgIntro})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex items-center justify-center h-full  ">
        <div className="bg-white shadow-lg rounded-xl px-6 py-4 text-center">
          <h1 className="text-2xl font-bold">Виртуальная лаборатория на тему "Свойства воздуха"</h1>
          <button
            onClick={() => navigate("/second")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Начать эксперимент "как воздух поддерживает горение"
          </button>
          <button
            onClick={() => navigate("/third")}
            className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600"
          >
            Начать эксперимент "давление в воздухе"
          </button>
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
