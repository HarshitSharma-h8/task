"use client";
import "./style.css"

import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";



import { useState } from "react";
import { useSpring, animated} from "@react-spring/web";

export default function Counter() {
  const [count, setCount] = useState(0);

  

  // Create a more dynamic and oscillating color change using math
  const springStyles  = useSpring({
    backgroundColor : `rgb(${Math.min(255, count * 10)}, ${Math.min(
      200,
      count * 5
    )}, 255)`,
  });

  const AnimatedDiv = animated('div');
  return (
    <AnimatedDiv
      className="flex flex-col items-center justify-center h-full transition-all duration-500 rounded-lg  box"
      style={springStyles }
    >

      <div className="bg-white p-6 rounded-lg shadow-lg text-center ">
        <h2 className="text-8xl font-bold mb-4 ">
          {count}
        </h2>
        <div className="flex space-x-4">
          <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
            <Button
              onClick={() => {
                setCount(0);
                localStorage.setItem("count", "0");
              }}
            >
              Reset
            </Button>
            <Button
              href="#text-buttons"
              onClick={() => setCount((prev) => prev - 1)}
            >
              -
            </Button>
          </ButtonGroup>
        </div>
      </div>
    </AnimatedDiv>

    
  );
}
