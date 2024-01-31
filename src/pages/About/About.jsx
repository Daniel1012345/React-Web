import "./About.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
const About = () => {
  return (
    <>
      <div className="custom-about">
        <Card body className="lead">
          OUR PHILOSOPHY - LEHIGH HUMAN SUPPORT SERVICES
        </Card>
        <div>
          <Accordion
            defaultActiveKey="0"
            className="cord-changes">
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <b>About Us</b>
              </Accordion.Header>
              <Accordion.Body>
                <p>
                  Welcome to Lehigh Human Support Services, where compassionate
                  care meets unparalleled expertise. Nestled in the heart of
                  Allentown, PA, our organization is a beacon of support
                  dedicated to enhancing the everyday lives of individuals
                  through comprehensive human support services.{" "}
                </p>
                <p>
                  At LHSS, we take pride in our commitment to excellence and our
                  deep understanding of the unique needs of each individual we
                  serve. Our team of dedicated professionals works tirelessly to
                  create personalized solutions that empower individuals to
                  overcome challenges and thrive in their everyday lives.
                </p>
                <p>
                  Our company fully embraces the Office of Developmental
                  Program’s (O.D.P) mission to support individuals with
                  developmental disabilities, influencing every aspect of our
                  approach. This commitment extends into the fabric of LHSS,
                  shaping our efforts to make a positive impact on the everyday
                  lives of those we serve.
                </p>
                <p>
                  What sets us apart is our unwavering commitment to fostering a
                  supportive and inclusive environment. Consistently adapting
                  and innovating, LHSS remains at the forefront of human support
                  services, meeting the evolving needs of our community. Our
                  proficiency in employee relations stems from a rich background
                  in customer service, allowing us to establish meaningful
                  connections and provide unparalleled care.
                </p>
                <p>
                  Join us on a journey where compassion meets expertise, and
                  where every individual's potential is not just recognized but
                  celebrated. At Lehigh Human Support Services, we are more than
                  a service provider; we are a community dedicated to
                  transforming everyday lives and building a brighter future
                  together.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <b>Mission and Vision Statement</b>
              </Accordion.Header>
              <Accordion.Body>
                <h5>
                  <b>
                    <u>Mission</u>
                  </b>
                </h5>
                <p>
                  At Lehigh Human Support Services, our mission is to be a
                  trusted partner, working collaboratively to enhance the lives
                  of individuals in our care and strengthen communities. We
                  provide person-centered support, prioritizing individualism,
                  self-determination, and social inclusion. Our commitment is to
                  empower and foster strong partnerships with families,
                  promoting choice and a sense of belonging. We aim to make a
                  positive impact, nurturing a feeling of home and community
                  presence, thus building a brighter future for all. We uphold
                  the principles of Everyday Lives: Values in Action to ensure
                  that every person we support achieves their full potential,
                  leading a life of dignity, inclusion, and fulfillment.
                </p>
                <hr />
                <h5>
                  <b>
                    <u>Vision</u>
                  </b>
                </h5>
                <p>
                  We envision Lehigh Human Support Services as a modern human
                  services agency that sees the individuals we support as
                  equals, regardless of their challenges. Every member of the
                  LHSS Leadership Team acts as a "servant" to the staff who work
                  directly with the individuals we support. We believe that the
                  people in our care desire the same basic life and lifestyle
                  that we do, and we are committed to helping them achieve their
                  goals and providing them with fun, rewarding, and quality life
                  experiences, mirroring the quality of life we desire for
                  ourselves.
                </p>
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <b>Our Values</b>
              </Accordion.Header>
              <Accordion.Body>
                <ul>
                  <li>
                    <p>
                      <b>Compassion</b>: We approach our work with a deep sense
                      of empathy, recognizing and responding to the unique needs
                      of each individual we serve.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Excellence</b>: Our commitment to excellence is
                      unwavering. We strive to provide high-quality human
                      support services that make a positive and lasting impact
                      on the lives of those we support.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Inclusivity</b>: LHSS is dedicated to fostering an
                      inclusive environment where everyone feels valued and
                      respected. We celebrate diversity and recognize the
                      strength it brings to our community.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Adaptability</b>: In a dynamic and evolving field, we
                      remain at the forefront by consistently adapting and
                      innovating. Our ability to respond to the changing needs
                      of our community sets us apart.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Empowerment</b>: We empower individuals to overcome
                      challenges and thrive in their everyday lives. Our
                      personalized solutions are designed to enhance the
                      independence and well-being of those we serve.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Commitment to ODP Mission</b>: LHSS fully embraces the
                      Office of Developmental Program’s mission to support
                      individuals with developmental disabilities. This
                      commitment is integrated into our values, guiding our
                      actions and decisions.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Customer Service Excellence</b>: Our proficiency in
                      employee relations is grounded in a rich background in
                      customer service. We prioritize meaningful connections and
                      provide unparalleled care to those entrusted to us.
                    </p>
                  </li>
                  <li>
                    <p>
                      <b>Community Building</b>: At Lehigh Human Support Services, we
                      are not just a service provider; we are a community
                      dedicated to transforming lives and building a brighter
                      future together.
                    </p>
                  </li>
                </ul>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default About;
