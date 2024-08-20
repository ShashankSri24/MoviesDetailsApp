import { TopRatedMovie } from "./Movieslist/TopRatedMovie";
import { TrendingMovie } from "./Movieslist/TrendingMovie";
import { UpComingMovie } from "./Movieslist/UpComingMovie";

import { useTopRatedData } from "./CustomHooks/TopRatedMovieData";
export const ListingAllMovies = () => {
  const { loading } = useTopRatedData();
  return (
    <div className="App">
      {loading ? (
        <h1 className="text">Loading...</h1>
      ) : (
        <>
          <div>
            <h1 className="heading">TopRated</h1>
          </div>
          <TopRatedMovie />
          <div>
            <h1 className="heading">Trending</h1>
          </div>
          <TrendingMovie />
          <div>
            <h1 className="heading">Upcoming</h1>
          </div>
          <UpComingMovie />
        </>
      )}
    </div>
  );
};
