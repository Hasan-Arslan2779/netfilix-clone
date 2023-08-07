import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "../src/components/Header";
import MainPage from "./pages/MainPage";
import MovieDetail from "./pages/MovieDetail";
function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/movie/:movie_id" element={<MovieDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
