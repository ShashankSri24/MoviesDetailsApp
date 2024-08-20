import "./App.css";
import { ListingAllMovies } from "./ListingMovies";
import { Route, Routes } from "react-router-dom";
import { Detailpage } from "./Movieslist/Detailspage";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<ListingAllMovies />}></Route>
        <Route path="/details/:id" element={<Detailpage />}></Route>
      </Routes>
    </>
  );
};
export default App;
