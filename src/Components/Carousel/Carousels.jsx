import Carousel from 'react-bootstrap/Carousel';
import './Carousel.css'

const Carousels = () => {
  return (
    <Carousel fade className='carousel-box'>
      <Carousel.Item interval={3000}>
      <img
          className="d-block w-100"
          src="/assets/Try1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We are committed to the everyday life Philosophy</h3>
          <p>In need of content. Waiting on great content</p>
          <p><a className="bnll" href="#">Contact Us</a></p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={4500}>
        <img
          className="d-block w-100"
          src="/assets/Try2.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We are committed to the everyday life Philosophy</h3>
          <p>In need of content. Waiting on great content</p>
          <p><a className="bnll" href="#">Contact Us</a></p>

        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={5500}>
        <img
          className="d-block w-100"
          src="/assets/testCaro.avif"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>We are committed to the everyday life Philosophy</h3>
          <p>In need of content. Waiting on great content</p>
          <p><a className="bnll" href="#">Contact Us</a></p>

        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  )
}

export default Carousels