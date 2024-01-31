import "./Home.css";
import Ourservices from "../../Components/Ourservices/Ourservices";
import Content from "../../Components/Content/Content";
import Carousels from "../../Components/Carousel/Carousels";
import Contact from "../../Components/ContractCard/Contact";

const Home = () => {
  return (
    <>
      <div className="Home">
        <Carousels />
      </div>
      <div className="container my-5 custom-cont">
        <div className="p-5 text-center bg-body-tetiary rounded-3 about">
          <h4 className="text-body-emphasis"><b>About Us</b></h4>
          <p>
            
              Welcome to Lehigh Human Support Services, where compassionate care
              meets unparalleled expertise. Nestled in the heart of Allentown,
              PA, our organization is a beacon of support dedicated to enhancing
              the everyday lives of individuals through comprehensive human
              support services.
            
          </p>
          <button type="button" class="btn btn-link button-changes">Read more</button>
        </div>
      </div>
      <div className="OurServices container">
        <Content ContentText={"Our"} ContentSpan={"Services"} />
        <Ourservices />
      </div>
      {/* For Second Header */}
      <div className="SecondHeader">
        <div className="secondHeaderContent">
          <figure>
            <p>The bond that links your true family is not one of blood, but of respect and joy in each other's life</p>
            <figcaption>- Richard Bach</figcaption>
          </figure>
        </div>
      </div>
      <div className="row featurette intro">
        <div className="col-md-7">
          <h2 className="featurette-heading fw-normal lh-1">
            First featurette heading.{" "}
          </h2>
          <p className="lead">
            Some great placeholder content for the first featurette here.
            Imagine some exciting prose here.
          </p>
        </div>
        <div className="col-md-5">
          <svg
            className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
            width="100%"
            height="500px"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Placeholder: 500x500"
            preserveAspectRatio="xMidYMid slice"
            focusable="false">
            <title>Placeholder</title>
            <rect
              width="100%"
              height="500px"
              fill="var(--bs-secondary-bg)"></rect>
          </svg>
        </div>
      </div>
      <div className="flex row change-contact">
        <Contact />
      </div>
    </>
  );
};

export default Home;
