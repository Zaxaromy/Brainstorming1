import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import SearchPage from "./search-page/SearchPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/search-page/SearchPage" element={<SearchPage />} />
      </Routes>
  </BrowserRouter>
  );
}
