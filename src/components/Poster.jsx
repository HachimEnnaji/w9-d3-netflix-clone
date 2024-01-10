import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
function Poster({ poster }) {
  return (
    <Col className={poster.responsive}>
      <Link to={`/MovieDetails/${poster.imdbID}`}>
        <img src={poster.Poster} className=" img-fluid" alt="img film" />
      </Link>
    </Col>
  );
}
export default Poster;
