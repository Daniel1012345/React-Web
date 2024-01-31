import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import "./Ourservices.css";

const Ourservices = () => {
  return (
    <>
      <CardGroup className="custom-box">
        <Card className="custom-card">
          <Card.Img
            className="custom-image"
            variant="top"
            src="/assets/story1.svg"
          />
          <Card.Body className="custom-body">
            <Card.Title className="text-start">
              <b>Residential Services</b>
            </Card.Title>
            <Card.Text>
              We provide residential support to individuals with intellectual
              disabilities to help them live better and more active lives in the
              community. 
            </Card.Text>
            <a href="/">
              <button class="bn-32 bn32">Read more</button>
            </a>
          </Card.Body>
        </Card>
        <Card className="custom-card">
          <Card.Img
            className="custom-image"
            variant="top"
            src="/assets/story2.svg"
          />
          <Card.Body className="custom-body">
            <Card.Title>
              <b>Respite Services</b>
            </Card.Title>
            <Card.Text>
              We offer assistance to individuals with intellectual disabilities and their families
              during times when they require a respite or when a temporary
              living arrangement with extra support becomes necessary.
            </Card.Text>
            <a href="/">
              <button class="bn-32 bn32">Read more</button>
            </a>
          </Card.Body>
        </Card>
      </CardGroup>
    </>
  );
};

export default Ourservices;
