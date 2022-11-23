import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import meter1 from '../assets/img/meter1-copia.png'
import meter2 from '../assets/img/meter2-copia.png'
import meter3 from '../assets/img/meter3-copia.png'
import colorSharp from '../assets/img/color-sharp-copia.png'

export const Skills = () =>{
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
      return(
        <section className="skill" id="skills">
        <Container>
            <Row>
                <Col>
                <div className="skill-box">
                <h2>Skills</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book.</p>
                <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    <div className="item">
                        <img src={meter1} alt="image"></img>
                        <h5>Web Development</h5>
                    </div>
                    <div className="item">
                        <img src={meter2} alt="image"></img>
                        <h5>Brand</h5>
                    </div>
                    <div className="item">
                        <img src={meter3} alt="image"></img>
                        <h5>Web </h5>
                    </div>
                    <div className="item">
                        <img src={meter1} alt="image"></img>
                        <h5>Development</h5>
                    </div>
                </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        <img className="background-image-left" src={colorSharp}/>
        </section>
      )
}