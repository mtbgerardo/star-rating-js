import { useState } from "react";

const StartRating = () => {
  const [rating, setRaiting] = useState(0);
  return (
    <div className="startRating">
      {[...Array(5)].map((star, index) => {
        index += 1;
        return (
        <button
            type="button"
            key={index}
            className={index <= rating ? "on" : "off"}
            onClick={() => setRaiting(index)}
          >
            <span className="start">&#9733;</span>
          </button>
          )
      })}
    </div>
  );
};

export default StartRating;
