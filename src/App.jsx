import { UseState } from "./components/UseState";
import { ClassState } from "./components/ClassState";
const App = () => {
  return (
    <h2 className="w-full h-screen grid place-items-center bg-zinc-800 text-zinc-100">
      <UseState name="Use State" />
      <ClassState name="Class State" />
    </h2>
  );
};
export default App;
