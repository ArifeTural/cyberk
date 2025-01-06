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
      text: "Firmanızın ihtiyaçlarına özel, özgün ve yaratıcı web tasarımları.",
      imgSrc: "./img/mobile.png",
      detail:
        "Özel web tasarımı, markanızın kimliğine ve hedef kitlenize uygun, özgün olarak hazırlanır. İhtiyaçlarınız doğrultusunda tüm tasarım aşamaları ile işbirliği yaparak siteyi en verimli hale getiriyoruz.",
    },
    {
      title: "Mobil Uyumlu Web Tasarımları",
      text: "Tüm cihazlarla uyumlu, mobil dostu web tasarımları ile kullanıcı deneyimini artırın.",
      imgSrc: "./img/ux.png",
      detail:
        "Mobil uyumlu tasarımlar sayesinde, kullanıcılarınız sitenizi her cihazda rahatlıkla görüntüleyebilir. Kullanıcı dostu arayüzler, mobil cihazlarda yüksek performans sağlar.",
    },
    {
      title: "SEO Uyumlu Web Tasarımları",
      text: "SEO uyumlu tasarımlar ile arama motorlarında üst sıralara çıkmanızı sağlıyoruz.",
      imgSrc: "./img/seo.png",
      detail:
        "SEO uyumlu web siteleri, arama motorları için optimize edilmiştir. Tasarım sürecinden itibaren SEO gereksinimlerini göz önünde bulundurarak sitenizin görünürlüğünü artırıyoruz.",
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
        <title>Web Tasarım Hizmetleri | CyberKoc - Dijital Varlığınızı Güçlendirin</title>
        <meta
          name="description"
          content="CyberKoc, SEO uyumlu, mobil uyumlu ve özel web tasarımı hizmetleri ile markanızı dijital dünyada bir adım öne taşır. Web tasarımı, SEO ve mobil uyumlu hizmetler hakkında bilgi alın."
        />
        <meta
          name="keywords"
          content="web tasarımı, SEO uyumlu tasarımlar, mobil uyumlu tasarımlar, özel web tasarımı, dijital tasarım, profesyonel web tasarımı, CyberKoc web tasarımı"
        />
        <meta
          name="robots"
          content="index, follow"
        />
      </Helmet>

      <header style={{ padding: "50px 0", textAlign: "center" }}>
        <h1 className="w-t-baslik">
          Web Tasarım Hizmetlerimizle Dijital Varlığınızı Güçlendirin
        </h1>
        <p className="w-t-par fs-4">
          Web tasarımı, SEO uyumu ve mobil uyumluluk ile markanızı dijital dünyada güçlü bir şekilde temsil edin. CyberKoc ile web tasarım sürecinizi başlatın.
        </p>
      </header>

      {/* Hizmetler Bölümü */}
      <section style={{ padding: "50px 0" }}>
        <Container>
          <h2 className="uibaslik text-center">Web Tasarım Hizmetlerimiz</h2>
          <Row>
            {services.map((service, index) => (
              <Col xs={12} sm={6} md={4} key={index}>
                <Card className="tasarim-hizmet-genel">
                  <Card.Img
                    variant="top"
                    src={service.imgSrc}
                    className="tasarim-hizmet-img"
                    alt={`CyberKoc - ${service.title}`}
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
                  Projeye başlamadan önce, markanızın hedef kitlesini analiz eder ve ihtiyacınıza göre planlama yaparız.
                </p>
              </div>
            </Col>
            <Col className="wt-surec" xs={12} sm={6} md={4}>
              <div style={{ textAlign: "center", padding: "1rem" }}>
                <h3 className="wt-h3">2. Tasarım</h3>
                <p className="wt-par">
                  Özgün ve kullanıcı dostu tasarımlar yaratırız. Her tasarım süreci, marka kimliğinizin güçlü bir şekilde yansıtılmasını sağlar.
                </p>
              </div>
            </Col>
            <Col className="wt-surec" xs={12} sm={6} md={4}>
              <div style={{ textAlign: "center", padding: "1rem" }}>
                <h3 className="wt-h3">3. Geliştirme</h3>
                <p className="wt-par">
                  Tasarımı geliştirir ve web sitenizi tamamen işlevsel hale getiririz. SEO uyumu ve hızlı yükleme sürelerine özen gösteririz.
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

