import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import HomeIndex from "./routes/Home/HomeIndex";
import SearchProfile from "./routes/Home/SearchProfile";
import Results from "./routes/Home/SearchProfile/Results";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomeIndex />} />
          <Route path="home" element={<Navigate to={"/"} />} />
          <Route path="search-profile" element={<SearchProfile />}>
            <Route path="results" element={<Results />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
