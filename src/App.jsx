import { UseState } from "./components/UseState";
import { UseReducer } from "./components/UseReducer";
const App = () => {
  return (
    <h2 className="w-full h-screen grid place-items-center bg-zinc-800 text-zinc-100">
      <UseState name="Use State" />
      <UseReducer name="Use Reducer" />
    </h2>
  );
};
export default App;
