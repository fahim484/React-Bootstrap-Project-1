import Carousel from "react-bootstrap/Carousel";

function Hero() {
  return (
    <>
      <Carousel
        autoPlay={true}
        interval={5000}
        controls={true}
        indicators={false}
      >
        <Carousel.Item>
          <div className="text-center hero-area">
            <p className="mt-5 brand-color">Meet your new car</p>
            <h1 className="font-weight-bold">Honda Civic Type R</h1>
            <div className="hero-btn">
              <button className="btn btn-outline-secondary font-weight-bold me-3">
                More Details
              </button>
              <button className="btn font-weight-bold test-drive">
                Test Drive
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img className="d-block w-100" src="Img/Header Image.png" alt="" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center hero-area">
            <p className="mt-5 brand-color">Join your new car</p>
            <h1 className="font-weight-bold">Aston Martin Valkyrie</h1>
            <div className="hero-btn">
              <button className="btn btn-outline-secondary font-weight-bold me-3">
                More Details
              </button>
              <button className="btn font-weight-bold test-drive">
                Test Drive
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img className="d-block w-100" src="Img/Header Image.png" alt="" />
          </div>
        </Carousel.Item>

        <Carousel.Item>
          <div className="text-center hero-area">
            <p className="mt-5 brand-color">Book your new car</p>
            <h1 className="font-weight-bold">Lamborghini Sian Roadster</h1>
            <div className="hero-btn">
              <button className="btn btn-outline-secondary font-weight-bold me-3">
                More Details
              </button>
              <button className="btn font-weight-bold test-drive">
                Test Drive
              </button>
            </div>
          </div>
          <div className="hero-img">
            <img className="d-block w-100" src="Img/Header Image.png" alt="" />
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Hero;
