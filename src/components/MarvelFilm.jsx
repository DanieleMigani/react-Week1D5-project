import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";

class MarvelFilm extends Component {
  state = {
    movies: [],
    isLoading: true,
    hasError: false,
    errorMessage: ""
  };

  fetchMovies = async () => {
    try {
      const response = await fetch("https://www.omdbapi.com/?i=tt3896198&apikey=465770b5&s=marvel");

      if (response.ok) {
        const data = await response.json();

        this.setState({
          movies: data.Search,
          isLoading: false
        });
      } else {
        this.setState({
          isLoading: false,
          hasError: true,
          errorMessage: `Error loading content. ERROR: ${response.status}`
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

    return (
      <Container fluid style={{ backgroundColor: "#141414" }} className="mt-3">
        <h4>Watch it again</h4>
        <Row>
          {movies.slice(4).map((movie) => (
            <Col key={movie.imdbID} xs={12} sm={6} lg={3} xl={2} className="mb-4">
              <Image src={movie.Poster} alt="movie" id="movie" />
            </Col>
          ))}
        </Row>
      </Container>
    );
  }
}

export default MarvelFilm;
