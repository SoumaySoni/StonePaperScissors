import { useState } from "react";
const generateRandom = () => {
  const myArray = ["stone", "paper", "scissors"];
  const randomElement = myArray[Math.floor(Math.random() * myArray.length)];
  return randomElement;
};

const Body = () => {
  const [result, setResult] = useState(null);

  const handleGame = (value) => {
    const randomElement = generateRandom();
    if (randomElement === value) setResult("It's a Tie");
    else if (randomElement === "stone" && value === "paper")
      setResult("player wins");
    else if (randomElement === "scissors" && value === "stone")
      setResult("player wins");
    else if (randomElement === "paper" && value === "scissors")
      setResult("player wins");
    else setResult("computer wins");
  };

  return (
    <div className="">
      <div className="flex justify-center  uppercase">
        <button
          onClick={() => handleGame("stone")}
          className="m-12 border-2 p-5 bg-black text-white cursor-pointer hover:bg-slate-600"
        >
          stone
        </button>
        <button
          onClick={() => handleGame("paper")}
          className="m-12 border-2 p-5 bg-black text-white cursor-pointer hover:bg-slate-600"
        >
          paper
        </button>
        <button
          onClick={() => handleGame("scissors")}
          className="m-12 border-2 p-5 bg-black text-white cursor-pointer hover:bg-slate-600"
        >
          scissors
        </button>
      </div>
      <div className="text-center">
        <h2 className="text-green-700 font-bold text-[50px]">{result}</h2>
      </div>
    </div>
  );
};

export default Body;
