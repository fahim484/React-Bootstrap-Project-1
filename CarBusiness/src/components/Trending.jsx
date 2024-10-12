import { Row, Button, Card, Col } from "react-bootstrap";

const TrendingData = [
  {
    img: "Img/trending-card-img1.png",
    title: "Used 2019 Audi S4 Premium Plus",
    mileage: "11,475 Miles",
    transmission: "All-wheel drive (AWD)",
    cylinders: "4-Cylinders Turbo",
    price: "$41,400",
    type: "Used",
    location: "Nairobi",
  },
  {
    img: "Img/trending-card-img2.png",
    title: "2013 Subaru Forester Premium Plus",
    mileage: "40,475 Miles",
    transmission: "All-wheel drive (AWD)",
    cylinders: "4-Cylinders Turbo",
    price: "$22,400",
    type: "New",
    location: "Tokyo",
  },
  {
    img: "Img/trending-card-img3.png",
    title: "Used 2010 BMW X3 Sport package",
    mileage: "20,850 Miles",
    transmission: "Rear-Wheel Drive (RWD)",
    cylinders: "4-Cylinders",
    price: "$39,200",
    type: "Used",
    location: "New York",
  },
];

export const Trending = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center fw-bold trending-section-title">Trending near you</h1>

        <Row className="d-flex justify-content-center">
          {TrendingData.map(
            ({ img, title, mileage, transmission, cylinders, price }, i) => (
              <Col key={i} sm={12} md={6} lg={4} >
                <Card style={{ width: "25rem", border: "none" }}>
                  <Card.Img variant="top" src={img} />
                  <Card.Body>
                    <Card.Title className="trending-card-title">{title}</Card.Title>
                    <Card.Text className="trending-card-text-up">{mileage}</Card.Text>
                    <Card.Text className="trending-card-text-down">
                      {transmission} . {cylinders}
                    </Card.Text>

                    <div className="d-flex flex-row gap-1">
                      <Button variant="primary" className="fw-bold trending-price-button">
                        {price}
                      </Button>
                      <Button variant="secondary" className="fw-bold trending-bestseller-button">
                        Bestseller
                      </Button>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            )
          )}
        </Row>
      </div>
    </>
  );
};
