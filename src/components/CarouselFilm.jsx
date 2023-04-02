import React, { Component } from "react";
import { Container, Row, Col, Image, Carousel } from "react-bootstrap";

class CarouselFilm extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };

  fetchMovies = async () => {
    try {
      const response1 = await fetch(
        "https://www.omdbapi.com/?i=tt3896198&apikey=465770b5&s=action"
      );
      const response2 = await fetch(
        "https://www.omdbapi.com/?i=tt3896198&apikey=465770b5&s=anime"
      );
      const response3 = await fetch(
        "https://www.omdbapi.com/?i=tt3896198&apikey=465770b5&s=love"
      );

      if (response1.ok && response2.ok && response3.ok) {
        const data1 = await response1.json();
        const data2 = await response2.json();
        const data3 = await response3.json();

        const movies = [...data1.Search, ...data2.Search, ...data3.Search];

        this.setState({
          movies: movies,
          isLoading: false
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content.`
        });
      }
    } catch (error) {
      this.setState({
        isLoading: false,
        hasError: true,
        errorMessage: `FATAL ERROR: ${error.message}`
      });
    }
  };

  componentDidMount = () => {
    this.fetchMovies();
  };

  render() {
    const { movies, isLoading, hasError, errorMessage } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (hasError) {
      return <div>{errorMessage}</div>;
    }

    const moviesToShow = movies.splice(0, Math.ceil(movies.length / 6) * 6);

    return (
      <Container fluid style={{ backgroundColor: "#141414" }} className="mt-3">
        <h4>Trending Now</h4>
        <Carousel interval={60000} slide={6} indicators={false}  className="my-3 ">
          {[...Array(Math.ceil(moviesToShow.length / 6))].map((_, i) => (
            <Carousel.Item key={i}>
              <Row>
                {moviesToShow.slice(i * 6, (i + 1) * 6).map((movie) => (
                  <Col key={movie.imdbID} xs={12} sm={6} lg={3} xl={2} className="mb-4">
                    <Image
                      src={movie.Poster}
                      alt="movie"
                      id="movie"
                      fluid
                      style={{ height: "350px", width: "222px", objectFit: "cover" }}
                    />
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>
    );
  }
}

export default CarouselFilm;





