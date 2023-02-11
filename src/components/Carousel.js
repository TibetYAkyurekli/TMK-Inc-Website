import Carousel from "react-bootstrap/Carousel";

// Photo Imports for Carousel
import Picture1 from "../images/jimmy-nilsson-masth-ka9CiTCVrD8-unsplash.jpg";
import Picture2 from "../images/laurence-ziegler-mjapqa64gTU-unsplash.jpg";

function HeroCarousel() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Picture1}
          alt="An arborist climbing a tree."
          height={"100%"}
          width={"100%"}
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Picture2}
          alt="An arborist walking with his chainsaw."
        />
      </Carousel.Item>
      {/* <Carousel.Item>
        <img className="d-block w-100" src={Picture3} alt="Third slide" />
      </Carousel.Item> */}
    </Carousel>
  );
}

export default HeroCarousel;
