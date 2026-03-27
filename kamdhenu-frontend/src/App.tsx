import { useState } from "react";
import Child from "./Child";

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <h1>React Profiling Demo</h1>

      <button onClick={() => setCount(count + 1)}>
        Count: {count}
      </button>

      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type here"
      />

      <Child count={count} />
    </div>
  );
}

export default App;