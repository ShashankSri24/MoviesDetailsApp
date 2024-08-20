import { useTopRatedData } from "../CustomHooks/TopRatedMovieData";

import MoviesList from "./MoviesList";
export const TopRatedMovie = () => {
  let { data } = useTopRatedData();
  return (
    <div className="App">
      {data.map((x) => {
        return (
          <MoviesList
            movie_name={x.title}
            rel_date={x.release_date}
            banner={x.poster_path}
            key={x.id}
            id={x.id}
          />
        );
      })}
    </div>
  );
};
