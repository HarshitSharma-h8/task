"use client";
// import { useEffect, useState } from "react";
// import { animated, useSpring, easings } from "@react-spring/web";

import Button from "@mui/material/Button";
import ButtonGroup from '@mui/material/ButtonGroup';

// const Counter = () => {
//   const [count, setCount] = useState(() => {
//     return Number(localStorage.getItem("count")) || 0;
//   });

//   // Update count in localStorage
//   useEffect(() => {
//     localStorage.setItem("count", count.toString());
//   }, [count]);

//   // Background transition with Bezier easing
//   const background = useSpring({
//     height: `${Math.min(count / 2, 100)}%`, // Normalized to a max height of 100%
//     backgroundColor: "blue",
//     config: { tension: 100, friction: 20, easing: easings.easeInOutCubic },
//   });

//   return (
//     <div className="p-5  rounded-lg shadow-md   w-full h-full bg-red-500 flex justify-center items-center">
//     {/* Animated Background that grows in height */}
//     <animated.div
//         style={background}

//       />
//       <div>
//         <h2 className="text-xl font-bold text-center">Counter: {count}</h2>
//         <div className="mt-3">
//           <Stack direction="row" spacing={2}>
//             <Button onClick={() => setCount((prev) => prev + 1)}>+</Button>
//             <Button
//               onClick={() => {
//                 setCount(0);
//                 localStorage.setItem("count", "0");
//               }}
//             >
//               Reset
//             </Button>
//             <Button
//               href="#text-buttons"
//               onClick={() => setCount((prev) => prev - 1)}
//             >
//               -
//             </Button>
//           </Stack>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Counter;

import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

export default function Counter() {
  const [count, setCount] = useState(0);

  // Create a more dynamic and oscillating color change using math
  const backgroundColor = useSpring({
    backgroundColor: `rgb(${Math.min(255, count * 10)}, ${Math.min(
      200,
      count * 5
    )}, 255)`,
    config: {
      tension: 170, // Controls the speed and "bounciness" of the animation
      friction: 20,  // Controls the smoothness of the transition
      duration: 500,
      easing: (t) => t * (2 - t)  // Use a valid easing function
    },
  });
  

  return (
    <animated.div
      className="flex flex-col items-center justify-center h-full transition-all duration-500 rounded-lg "
      style={backgroundColor}
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
    </animated.div>
  );
}
