import "./Services.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";

const Services = () => {
  return (
    <>
      <div className="custom-services">
        <Card body className="lead">
          OUR SERVICES - LEHIGH HUMAN SUPPORT SERVICES
        </Card>
        <div>
          <h3>RESIDENTIAL SERVICES</h3>
          <Accordion defaultActiveKey="0" className="cord-changes">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>Residential Supported living</b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We provide residential support to individuals with
                  intellectual disabilities to help them live better and more
                  active lives in the community. Everyday Lives: Values in
                  Action is the touchstone that guides everything we do as we
                  deliver residential support. The concept is simple: we develop
                  and tailor our services around what is most important to the
                  people in our service.{" "}
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b>Individualized services</b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  We collaborate extensively with individuals and their families
                  to establish optimal support systems for those under our care.
                  At LHSS, our approach involves constructing supports aligned
                  with the individual's goals and desires. We strive to craft
                  meaningful life experiences based on the individual's
                  self-determined aspirations. For those who may not be
                  accustomed to expressing their preferences, we offer engaging
                  and stimulating activities, mirroring experiences such as
                  socializing with friends and family, participating in work or
                  volunteer opportunities, engaging in sports, shopping,
                  traveling, and more.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b>Day to Day </b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Apart from prioritizing the enhancement of quality of life, we
                  also attend to essential life requirements. Our
                  responsibilities encompass arranging doctor appointments,
                  administering and overseeing medication, assisting with
                  activities of daily living (ADLs), facilitating meal
                  preparation, and maintaining household cleanliness and
                  organization. These efforts collectively contribute to the
                  overall outlook and well-being of the individuals we support.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
        <hr />
        <div>
          <h3>RESPITE SERVICES</h3>
          <Accordion defaultActiveKey="0" className="cord-changes">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>About Respite services</b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Taking a break is essential for everyone! We offer assistance
                  to individuals with intellectual disabilities and their
                  families during times when they require a respite or when a
                  temporary living arrangement with extra support becomes
                  necessary.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b>Community Placement </b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  With our trained staff and accessible homes, we welcome
                  families and individuals in search of a temporary community
                  placement for a qualifying family member. Our doors are open
                  to provide the support needed during this period.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b>More information on respite</b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  For details about respite availability, reach out to us at
                  info@lhss-email.com.
                </p>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Services;
