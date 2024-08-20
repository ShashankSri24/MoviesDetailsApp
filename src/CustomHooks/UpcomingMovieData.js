import { useState, useEffect } from "react";
export const useUpcomingData = () => {
  const [data, setdata] = useState([]);
  const [loading, setloading] = useState(false);
  const load = () => {
    const url = "https://api.themoviedb.org/3/movie/upcoming";

    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM2RjODBjMWE4M2Q4MWIwYjMxYmVhNTMzNTE0YjQyZCIsIm5iZiI6MTcyMDg1OTk0MS4xNjgwMDksInN1YiI6IjY2OTIzODNlZmUzZjNmNTY1N2UyNzhlMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aOdvDNIQtvQ2TLJBAipU7sVPBb6juwjc3H_emR1n6LQ",
      },
    };
    setloading(true);
    fetch(url, options)
      .then((res) => res.json())
      .then((json) => {
        setdata(json.results);
        setloading(false);
      })
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    load();
  }, []);
  return { data, loading };
};
