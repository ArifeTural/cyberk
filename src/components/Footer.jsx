import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
      <Row>
        <Col className="cal-1">
          <p>
            <a href="tel:+90000000000" className="text-decoration-underline">
              <i className="fa-solid fa-phone"></i>+90000000000000
            </a>
          </p>

          <p>
            <a
              href="mailto:bilgi@bilgi.tr"
              className="text-decoration-underline"
            >
              <i className="fa-solid fa-envelope"></i>bilgi@bilgi
            </a>
          </p>
        </Col>

        <Col className="cal-2">
          <p className="fot">
            <i className="fa-solid fa-location-dot"></i>
            <span>Adress:</span> nine hatun....
          </p>
        </Col>

        <Col className="cal-3">
          <ul>
            <li>
              <Link to="/AI" onClick={scrollToTop}>
                Yapay Zeka Çözümleri
              </Link>
            </li>
            <li>
              <Link to="/DigitalTransformation" onClick={scrollToTop}>
                Dijital Dönüşüm Çözümleri
              </Link>
            </li>
            <li>
              <Link to="/EcommerceandConsultancy" onClick={scrollToTop}>
                E-Ticaret & Danışmanlık
              </Link>
            </li>
          </ul>
        </Col>
        <Col className="cal-4">
          <ul>
            <li>
              <Link to="/MobilApp" onClick={scrollToTop}>
                Mobil Yazılım
              </Link>
            </li>
            <li>
              <Link to="/Ui&Ux" onClick={scrollToTop}>
                UI & UX
              </Link>
            </li>
            <li>
              <Link to="/WebDesign" onClick={scrollToTop}>
                Web Tasarım
              </Link>
            </li>
            <li>
              <Link to="/WebDevelopment" onClick={scrollToTop}>
                Web Yazılım
              </Link>
            </li>
            <li>
              <Link to="/DigitalRightsManagement" onClick={scrollToTop}>
                DRM
              </Link>
            </li>
          </ul>
        </Col>

        <Col className="cal-5">
          <li>
            <Link
              className="fs-5"
              to="/HowCanWeAssistYou"
              onClick={scrollToTop}
            >
              Teklif Al
            </Link>
          </li>

          <div className="fa d-flex align-items-center h-100">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-instagram" />
            </a>
            <a
              href="https://www.youtube.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-youtube" />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook" />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a href="https://x.com" target="_blank" rel="noopener noreferrer">
              <i className="fa-brands fa-x-twitter"></i>
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
