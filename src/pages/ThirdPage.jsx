import React, { useState } from "react";
import mainBg from "../assets/mainBg.png";
import paskalGif from "../assets/paskal.gif";

const ThirdPage = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handleGifClick = () => {
    if (!isPlaying) {
      setIsPlaying(true); // Включаем гифку
      setTimeout(() => {
        setIsPlaying(false); // Останавливаем гифку после завершения
        alert(
          "Воздух распределяется равномерно при давлении благодаря хаотичному движению молекул. " +
          "С увеличением давления молекулы сталкиваются чаще, что приводит к равномерному распределению. " +
          "Этот принцип лежит в основе закона Паскаля, который утверждает, что давление в жидкости или газе передается равномерно во всех направлениях. " +
          "Давление воздуха важно в работе механизмов и поддержании баланса в атмосфере. " +
          "Это явление демонстрирует важность понимания свойств воздуха в повседневной жизни."
        );
      }, 5000); // Длительность воспроизведения гифки 5 секунд
    }
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage: `url(${mainBg})`,
      }}
    >
      <div className="flex flex-col items-center">
        <h1 className="text-2xl font-bold text-center text-black mb-8">
          Эксперимент: Давление воздуха
        </h1>
        <div
          className="relative cursor-pointer"
          onClick={handleGifClick}
          style={{ width: "200px", height: "200px" }}
        >
          {isPlaying ? (
            <img
              src={paskalGif}
              alt="Паскаль"
              className="w-full h-full"
            />
          ) : (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-full">
              <p className="text-white text-lg">Нажмите, чтобы воспроизвести</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ThirdPage;
