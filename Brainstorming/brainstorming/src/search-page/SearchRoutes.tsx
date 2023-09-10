import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchHeader from "./SearchHeader";
import SearchSidebar from "./SearchSidebar";
import MainSearchPageContent from "./MainSearchContent";

const SearchRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SearchHeader />} />
        <Route path="/" element={<SearchSidebar />} />
        <Route path="/" element={<MainSearchPageContent />} />
      </Routes>
    </BrowserRouter>
  );
};

export default SearchRoutes;
