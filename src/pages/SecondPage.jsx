import React, { useState } from "react";
import mainBg from "../assets/mainBg.png";
import colba1 from "../assets/colba1.png";
import colba2 from "../assets/colba2.png";
import colba3 from "../assets/colba3.png";
import fireG from "../assets/fireG.png";
import fireGif from "../assets/fireGif.gif";

const SecondPage = () => {
  const [isBurning, setIsBurning] = useState(true); // Огонь горит по умолчанию
  const [activeColba, setActiveColba] = useState(null); // Текущая активная колба
  const [isColbaOnBurner, setIsColbaOnBurner] = useState(false); // Колба находится на горелке
  const [burnedColbas, setBurnedColbas] = useState([]); // Массив использованных колб

  const handleColbaClick = (colbaType) => {
    if (isColbaOnBurner) return; // Предотвращаем запуск новой колбы до завершения текущей
    setActiveColba(colbaType);
    setIsColbaOnBurner(true); // Колба помещается на горелку

    let burnTime = 0;

    switch (colbaType) {
      case "small":
        burnTime = 4000;
        break;
      case "medium":
        burnTime = 8000;
        break;
      case "large":
        burnTime = 14000;
        break;
      default:
        burnTime = 0;
    }

    setTimeout(() => {
      setIsBurning(false); // Гасим огонь после burnTime
      alert(`Огонь горел ${burnTime / 1000} секунд.`);

      setTimeout(() => {
        setActiveColba(null); // Возвращаем колбу на место через 2 секунды
        setIsBurning(true); // Заново зажигаем огонь
        setIsColbaOnBurner(false); // Колба больше не на горелке

        // Добавляем использованную колбу в массив
        setBurnedColbas((prev) => [...prev, colbaType]);

        // Показываем уведомление после всех трех колб
        if (burnedColbas.length === 2) {
          alert(
            "Объем воздуха влияет на время горения горелки: чем больше воздуха, тем дольше горит пламя. Свеча, горящая в закрытом сосуде с обычным воздухом, в конце концов гаснет, и оставшийся воздух уже не поддерживает горения.Воздух проявляет окислительные свойства (за счет большого содержания кислорода), поддерживает горение и дыхание; плохо проводит тепло, хорошо растворяется в воде. Его плотность уменьшается по мере увеличения температуры, а вязкость увеличивается."
          );
        }
      }, 2000);
    }, burnTime);
  };

  return (
    <div
      className="w-screen h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${mainBg})` }}
    >
      {/* Горелка */}
      <div className="absolute bottom-[30%] left-[40%]">
        <div className="relative">
          <img src={fireG} alt="Горелка" className="w-32 h-32" />
          {isBurning && (
            <img
              src={fireGif}
              alt="Огонь"
              className="w-20 h-20 absolute top-[-60px] left-[20px]"
            />
          )}
        </div>
      </div>

      {/* Колбы */}
      <div className="flex justify-center items-center space-x-10 absolute top-[60%] left-0 right-0">
        <img
          src={colba1}
          alt="Маленькая колба"
          className={`w-24 h-16 cursor-pointer transition-transform duration-500 ${
            activeColba === "small" && isColbaOnBurner
              ? "-translate-y-[160px] -translate-x-[-8px]"
              : ""
          }`}
          onClick={() => handleColbaClick("small")}
        />
        <img
          src={colba2}
          alt="Средняя колба"
          className={`w-24 h-30 cursor-pointer transition-transform duration-500 ${
            activeColba === "medium" && isColbaOnBurner
              ? "translate-x-[-126px] -translate-y-[200px]"
              : ""
          }`}
          onClick={() => handleColbaClick("medium")}
        />
        <img
          src={colba3}
          alt="Большая колба"
          className={`w-24 h-50 cursor-pointer transition-transform duration-500 ${
            activeColba === "large" && isColbaOnBurner
              ? "translate-x-[-265px] -translate-y-[200px]"
              : ""
          }`}
          onClick={() => handleColbaClick("large")}
        />
      </div>
    </div>
  );
};

export default SecondPage;
