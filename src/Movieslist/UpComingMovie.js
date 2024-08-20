import { useUpcomingData } from "../CustomHooks/UpcomingMovieData";
import MoviesList from "./MoviesList";

export const UpComingMovie = () => {
  let { data } = useUpcomingData();
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
