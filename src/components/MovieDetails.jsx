import { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  const params = useParams();
  //   http://www.omdbapi.com/?apikey=aa5aec3c&s= +params.imdbID"
  const fetchdata = async () => {
    try {
      const response = await fetch("http://www.omdbapi.com/?apikey=aa5aec3c&i=" + params.movieId);
      if (response.ok) {
        const result = await response.json();
        // console.log(result);
        setMovie(result);
      } else {
        throw new Error("Errore nella richiesta dei dati");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  console.log("PARAMS", params);
  useEffect(() => {
    fetchdata();
    console.log(movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="mt-3">
      {movie ? (
        <>
          <h2 className="text-center">
            <span className="text-secondary">Hai Scelto:</span> <strong>{movie.Title}</strong>
          </h2>
          <Row className="justify-content-center">
            <Col xs={4}>
              <Card>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Plot}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          {console.log("ho i dati del film")}
        </>
      ) : (
        <>
          <h3>Caricamento..</h3>
          {/* {console.log("sono passato da qui per il caricamento" + movie.Title)} */}
        </>
      )}
    </Container>
  );
};
export default MovieDetails;
