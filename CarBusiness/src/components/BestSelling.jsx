import { Col, Row } from "react-bootstrap";

const BestSellingItemsData = [
  {
    img: "Img/Best-Selling-Subaru-Logo-1.png",
    name: "Subaru",
    price: "$40k",
  },
  {
    img: "Img/Best-Selling-Volkswagen-Logo-2.png",
    name: "Volkswagen",
    price: "$15k",
  },
  {
    img: "Img/Best-Selling-Toyota-Logo-3.png",
    name: "Toyota",
    price: "$27k",
  },
  {
    img: "Img/Best-Selling-Mercedes-Benz-Logo-4.png",
    name: "Mercedes-Benz",
    price: "$60k",
  },
  {
    img: "Img/Best-Selling-Hyundai-Logo-5.png",
    name: "Hyundai",
    price: "$30k",
  },
  {
    img: "Img/Best-Selling-Infiniti-Logo-6.png",
    name: "Infiniti",
    price: "$54k",
  },
];

export const BestSelling = () => {
  return (
    <>
      <div className="container" style={{ paddingTop: "86px" }}>
        <h1 className="text-center fw-bold mb-5">
          Explore best selling car makes
        </h1>
        <Row
          className="d-flex justify-content-center"
          style={{ paddingTop: "50px" }}
        >
          {BestSellingItemsData.map(({ img, name, price }, i) => (
            <Col md={4} key={i} className="d-flex justify-content-center">
              <div className="vw-ad" style={{ width: "305px" , height: "84px"}}>
                <img
                  src={img}
                  alt="Volkswagen Logo"
                  className="vw-logo w-[100px]"
                />
                <div>
                  <div className="vw-text">{name}</div>
                  <div className="vw-price">from {price}</div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};
