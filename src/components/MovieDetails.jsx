import { useEffect, useState } from "react";
import { Badge, Card, Col, Container, Placeholder, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState(null);
  // eslint-disable-next-line no-unused-vars
  const [isHover, setIsHover] = useState(false);

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
    // console.log(movie);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Container className="mt-3 ">
      {movie !== null ? (
        <>
          <h2 className="text-center">
            <span className="text-secondary">Hai Scelto:</span> <strong>{movie.Title}</strong>
          </h2>
          <Row className="justify-content-center ">
            <Col xs={8} lg={5} xl={5} xxl={4}>
              {/* <Card>
                <Card.Img variant="top" src={movie.Poster} />
                <Card.Body>
                  <Card.Title>{movie.Title}</Card.Title>
                  <Card.Text>{movie.Plot}</Card.Text>
                  <Badge bg="dark">{movie.Genre}</Badge>
                </Card.Body>
              </Card>
            </Col> */}
              <Card
                className="bg-dark text-white"
                onMouseEnter={() => {
                  setIsHover(true);
                }}
                onMouseLeave={() => {
                  setIsHover(false);
                }}
                style={{ cursor: "pointer" }}
              >
                <Card.Img className={isHover ? "opacity-25" : "opacity-100"} src={movie.Poster} alt="Card image" />
                {isHover && (
                  <>
                    <Card.ImgOverlay>
                      <Card.Title>{movie.Title}</Card.Title>
                      <Card.Text>{movie.Plot}</Card.Text>
                      <Badge bg="warning" className="text-black w-75 mx-auto mb-1 lead">
                        {movie.Genre}
                      </Badge>
                    </Card.ImgOverlay>
                  </>
                )}
              </Card>
            </Col>
          </Row>
          {console.log("passo per il circuito in cui ho il film\t" + movie)}
        </>
      ) : (
        <>
          <h2 className="text-center">
            <span className="text-secondary">Caricamento...</span>
          </h2>
          <Row className="justify-content-center ">
            <Col xs={8} lg={5} xl={5} xxl={4}>
              <Card>
                {/* <Placeholder xs={5} animation="glow" /> */}

                <Card.Title>
                  <Placeholder xs={3} size="lg" className="mb-3 p-2" />
                  {/* <Placeholder xs={4} size="lg" /> */}
                </Card.Title>
                <Card.Text>
                  {/* <Placeholder xs={12} /> */}

                  <Placeholder xs={10} size="lg" />
                  <Placeholder xs={10} size="lg" />
                  <Placeholder xs={10} size="lg" />
                  <Placeholder xs={10} size="lg" />
                </Card.Text>
              </Card>
              {/* {console.log("sono passato da qui per il caricamento" + movie.Title)} */}
              {console.log("passo per il circuito in cui NON ho il film\t" + movie)}
            </Col>
          </Row>
        </>
      )}
    </Container>
  );
};
export default MovieDetails;
