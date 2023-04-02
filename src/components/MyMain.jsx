import CarouselFilm from "./CarouselFilm";
import MarvelFilm from "./MarvelFilm";
import HarryPotterFilm from "./HarryPotterFilm";
import { Container } from "react-bootstrap";

const MyMain = () => {
  return (
    <Container fluid>
      <CarouselFilm />
      <MarvelFilm />
      <HarryPotterFilm />
    </Container>
  );
};

export default MyMain;
