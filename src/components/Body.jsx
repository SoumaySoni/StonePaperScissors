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
    else if (randomElement === "rock" && value === "scissors")
      setResult("player wins");
    else if (randomElement === "scissors" && value === "paper")
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
          onClick={() => handleGame("scissor")}
          className="m-12 border-2 p-5 bg-black text-white cursor-pointer hover:bg-slate-600"
        >
          scissor
        </button>
      </div>
      <div>
        <p style={{ color: "green" }}>{result}</p>
      </div>
    </div>
  );
};

export default Body;
