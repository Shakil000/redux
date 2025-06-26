import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./features/counter/counterSlice";
import type { RootStates } from "./redux/store";

function App() {
  const dispatch = useDispatch();
  const { count } = useSelector((state: RootStates) => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <h1>Creating counter with redux</h1>

      <button onClick={handleIncrement}>Increment</button>
      <div>{count}</div>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
}

export default App;

// 3.32s
