import { useState } from "react";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  console.log("PARAMS", params);
  return <></>;
};
export default MovieDetails;
