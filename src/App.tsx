import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import What from "./pages/What";
import Where from "./pages/Where";
import Who from "./pages/Who";


function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/what" element={<What />} />
          <Route path="/where" element={<Where />} />
          <Route path="/who" element={<Who />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
