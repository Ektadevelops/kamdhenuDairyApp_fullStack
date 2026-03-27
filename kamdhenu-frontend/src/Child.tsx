import React from "react";

const Child = ({ count }: { count: number }) => {
  console.log("Child rendered");

  // Simulate heavy calculation
  let total = 0;
  for (let i = 0; i < 100000000; i++) {
    total += i;
  }

  return (
    <div>
      <h2>Child Component</h2>
      <p>Count: {count}</p>
    </div>
  );
};

export default React.memo(Child);