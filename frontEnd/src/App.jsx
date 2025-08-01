import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import ExpanseTracker from "./pages/ExpanseTracker";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<ExpanseTracker />} />
      </Routes>
    </>
  );
}

export default App;
