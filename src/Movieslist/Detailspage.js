import { useParams } from "react-router-dom";
import { useMovieDetailData } from "../CustomHooks/MovieDetailsData";
import Rating from "@mui/material/Rating";
const Detailpage = () => {
  const { id } = useParams();

  const { data, loading } = useMovieDetailData(id);
  console.log(data);
  return (
    <>
      {loading ? (
        <h1 className="text">Loading...</h1>
      ) : (
        <div className="img-details-container">
          <div>
            <img
              className="img-details"
              width={"100%"}
              src={"https://image.tmdb.org/t/p/original/" + data.poster_path}
              alt="img"
            />
          </div>
          <div>
            <h1>{data.title}</h1>
            <h2>{data.genres?.map((x) => x.name).join(",")}</h2>
            <p>{gettime(data.runtime)}</p>
            <h2>Ave Vote : {data.vote_average}</h2>
            <Rating
              name="read-only"
              max={10}
              value={data.vote_average}
              readOnly
            />
            <p>{data.overview}</p>
          </div>
        </div>
      )}
    </>
  );
  function gettime(time) {
    let hr = parseInt(time / 60);
    let min = time % 60;
    return `${hr}hr ${min}min`;
  }
};
export { Detailpage };
