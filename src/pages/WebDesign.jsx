import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const WebDesign = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: "Özel Web Tasarımı",
      text: "İhtiyaçlarınıza göre tamamen özelleştirilmiş web tasarımları sunuyoruz.",
      imgSrc: "./img/mobile.png",
      detail:
        "Özel web tasarımı, firmanızın ihtiyaçlarına göre tamamen size özel olarak hazırlanır. Tasarım süreci boyunca her aşamada sizinle iletişimde kalarak beklentilerinizi en iyi şekilde karşılamayı hedefliyoruz.",
    },
    {
      title: "Mobil Uyumlu Tasarımlar",
      text: "Tüm tasarımlarımız mobil cihazlarla uyumlu olup, her ekran boyutuna göre optimize edilir.",
      imgSrc: "./img/ux.png",
      detail:
        "Mobil uyumlu tasarımlar sayesinde, kullanıcılarınız her türlü cihazdan sitenize kolayca erişebilir. Mobil cihazlarda da mükemmel bir deneyim sunarak kullanıcı memnuniyetini artırıyoruz.",
    },
    {
      title: "SEO Uyumlu Tasarımlar",
      text: "Web sitenizin SEO dostu olmasını sağlayarak arama motorlarında üst sıralara çıkmasına yardımcı oluruz.",
      imgSrc: "./img/seo.png",
      detail:
        "SEO uyumlu web siteleri, arama motorlarında daha görünür olmanıza yardımcı olur. Tasarım aşamasından başlayarak SEO'nun tüm gereksinimlerini göz önünde bulundurarak sitenizin sıralamasını iyileştiriyoruz.",
    },
  ];

  const [show, setShow] = useState(false);
  const [modalContent, setModalContent] = useState({});

  const handleShow = (service) => {
    setModalContent(service);
    setShow(true);
  };

  const handleClose = () => setShow(false);

  return (
    <>
      <Helmet>
        <title>Web Tasarım Hizmetleri | Dijital Varlığınızı Güçlendirin</title>
        <meta
          name="description"
          content="Yaratıcı ve kullanıcı dostu web siteleri ile markanızı dijital dünyada bir adım öne taşıyın. SEO uyumlu, mobil uyumlu ve özel web tasarımı hizmetleri sunuyoruz."
        />
        <meta
          name="keywords"
          content="web tasarımı, SEO uyumlu tasarımlar, mobil uyumlu tasarımlar, özel web tasarımı, dijital varlık"
        />
      </Helmet>

      <header style={{ padding: "50px 0", textAlign: "center" }}>
        <h1 className="w-t-baslik">
          Web Tasarım Hizmetlerimizle Dijital Varlığınızı Güçlendirin
        </h1>
        <p className="w-t-par fs-4">
          Yaratıcı ve kullanıcı dostu web siteleri ile markanızı dijital dünyada
          bir adım öne taşıyın.
        </p>
      </header>

      {/* Hizmetler Bölümü */}
      <section style={{ padding: "50px 0" }}>
        <Container>
          <h2 className="uibaslik text-center">Web Tasarım Hizmetlerimiz</h2>
          <Row>
            {services.map((service, index) => (
              <Col xs={12} sm={6} md={4} key={index}>
                <Card className=" tasarim-hizmet-genel">
                  <Card.Img
                    variant="top"
                    src={service.imgSrc}
                    className="tasarim-hizmet-img "
                  />
                  <Card.Body className="tasarim-hizmet">
                    <Card.Title>{service.title}</Card.Title>
                    <Card.Text>{service.text}</Card.Text>
                    <Button
                      className="tasarim-hizmet-buton"
                      variant="primary"
                      onClick={() => handleShow(service)}
                    >
                      Detayları Gör
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Modal - Detaylı Görünüm */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title className="uibaslik mb-5">
            {modalContent.title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="tasarim-hizmet">{modalContent.detail}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button
            className="tasarim-hizmet-buton"
            variant="secondary"
            onClick={handleClose}
          >
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Süreç Adımları */}
      <section style={{ padding: "50px 0" }}>
        <Container>
          <h2 className="uibaslik mb-5">Web Tasarım Sürecimiz</h2>
          <Row className="d-flex gap-5 justify-content-center">
            <Col className="wt-surec" xs={12} sm={6} md={4}>
              <div style={{ textAlign: "center", padding: "1rem" }}>
                <h3 className="wt-h3">1. Planlama</h3>
                <p className="wt-par">
                  Projeye başlarken ihtiyaçlarınızı belirler ve tasarım sürecine
                  dair detayları planlarız.
                </p>
              </div>
            </Col>
            <Col className="wt-surec" xs={12} sm={6} md={4}>
              <div style={{ textAlign: "center", padding: "1rem" }}>
                <h3 className="wt-h3">2. Tasarım</h3>
                <p className="wt-par">
                  İhtiyaçlarınıza göre özel, estetik ve kullanıcı dostu
                  tasarımlar oluştururuz.
                </p>
              </div>
            </Col>
            <Col className="wt-surec" xs={12} sm={6} md={4}>
              <div style={{ textAlign: "center", padding: "1rem" }}>
                <h3 className="wt-h3">3. Geliştirme</h3>
                <p className="wt-par">
                  Tasarımı geliştirme aşamasına geçiririz ve sitenizi işlevsel
                  hale getiririz.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* İletişim */}
      <Row className="text-center m-5">
        <Col>
          <h3 style={{ color: "#142e70" }}>
            Hayalinizdeki Web Sitesi İçin Hemen Teklif Alın!
          </h3>
          <Link to="/Teklif" onClick={scrollToTop}>
            <Button
              style={{ color: "aliceblue", backgroundColor: "#142e70" }}
              size="lg"
            >
              Teklif Al
            </Button>
          </Link>
        </Col>
      </Row>
    </>
  );
};

export default WebDesign;
