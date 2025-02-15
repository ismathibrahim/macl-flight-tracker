import { Route, Routes } from "react-router";
import Home from "./screens/Home";

const App = () => {
  return (
    <div className="bg-bg-subtle min-h-[100vh]">
      <div className="max-w-lg mx-auto h-full">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
