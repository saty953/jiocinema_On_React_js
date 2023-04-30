import Carousel from "react-bootstrap/Carousel";
import "../App.css";
import { Button } from "react-bootstrap";
function Carouel() {
  return (
    <Carousel>
      <Carousel.Item style={{ height: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/dc_vs_srh_carousel-1682773025003.jpg"
          alt="First slide"
        />

        <div style={{ display: "flex" }} className="carousel-caption">
          <Button
            style={{
              background: "#D9008D",
              height: "40px",
              width: "140px",
              borderStyle: "none",
              color: "white",
              lineHeight: "1.2",
              fontSize: "1rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            WATCH
          </Button>
          <div
            style={{
              color: "White",
              lineHeight: "1.2",
              fontSize: "2.3rem",
              fontWeight: "1700",
            }}
          >
            <h1>DC vs SRH</h1>
            <h5>SRH elected to bat first.</h5>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ height: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/kkr_vs_gt_carousel-1682757355758.jpg?imformat=chrome"
          alt="Second slide"
        />
        <div style={{ display: "flex" }} className="carousel-caption">
          <Button
            style={{
              background: "#D9008D",
              height: "40px",
              width: "140px",
              borderStyle: "none",
              color: "white",
              lineHeight: "1.2",
              fontSize: "1rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            WATCH
          </Button>
          <div style={{ color: "red" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ height: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/the_insider_carousel_smith_morgan-1682685317045.jpg?imformat=chrome"
          alt="Third slide"
        />
        <div style={{ display: "flex" }} className="carousel-caption">
          <Button
            style={{
              background: "#D9008D",
              height: "40px",
              width: "140px",
              borderStyle: "none",
              color: "white",
              lineHeight: "1.2",
              fontSize: "1rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            WATCH
          </Button>
          <div style={{ color: "red" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ height: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/dc_vs_srh_carousel-1682773025003.jpg"
          alt="First slide"
        />
        <div style={{ display: "flex" }} className="carousel-caption">
          <Button
            style={{
              background: "#D9008D",
              height: "40px",
              width: "140px",
              borderStyle: "none",
              color: "white",
              lineHeight: "1.2",
              fontSize: "1rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            WATCH
          </Button>
          <div style={{ color: "red" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ height: "90vh" }}>
        <div>
          <img
            className="d-block w-100"
            src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/kkr_vs_gt_carousel-1682757355758.jpg?imformat=chrome"
            alt="Second slide"
            style={{
              boxShadow:
                "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          />
        </div>
        <div style={{ display: "flex" }} className="carousel-caption">
          <Button
            style={{
              background: "#D9008D",
              height: "40px",
              width: "140px",
              borderStyle: "none",
              color: "white",
              lineHeight: "1.2",
              fontSize: "1rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            WATCH
          </Button>
          <div style={{ color: "red" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>
      <Carousel.Item style={{ height: "90vh" }}>
        <img
          className="d-block w-100"
          src="https://v3img.voot.com/resizeHigh,w_1920,h_1080/v3Storage/assets/the_insider_carousel_smith_morgan-1682685317045.jpg?imformat=chrome"
          alt="Third slide"
        />
        <div style={{ display: "flex" }} className="carousel-caption">
          <Button
            style={{
              background: "#D9008D",
              height: "40px",
              width: "140px",
              borderStyle: "none",
              color: "white",
              lineHeight: "1.2",
              fontSize: "1rem",
              fontWeight: "700",
              paddingLeft: "9px",
            }}
          >
            WATCH
          </Button>
          <div style={{ color: "red" }}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carouel;
