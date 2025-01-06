import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import "../css/yapayDijital.css";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

function Ai() {
  const [showModal, setShowModal] = useState({});

  const solutions = [
    {
      title: "Makine Öğrenmesi",
      description:
        "Veriyle öğrenen modeller kurup tahmin yapabilir, kararları geliştirebilir ve süreçleri otomatikleştirebilirsiniz.",
      modalTitle: "Makine Öğrenmesi",
      modalBody:
        "Makine öğrenmesi, verilerden öğrenen ve zamanla daha iyi sonuçlar üreten algoritmalar kullanır. Şirketinizin verilerini analiz ederek, daha doğru tahminler yapabilir ve verimliliği artırabilirsiniz.",
    },
    {
      title: "Doğal Dil İşleme",
      description:
        "İnsan dilinin potansiyelini açığa çıkarın; chatbotlar, duygu analizi ve daha fazlası için kullanın.",
      modalTitle: "Doğal Dil İşleme",
      modalBody:
        "Doğal Dil İşleme (NLP), insan dilini anlamak ve analiz etmek için kullanılan bir yapay zeka alanıdır. Chatbotlar, duygu analizi ve metin madenciliği gibi uygulamalar ile işlerinizi daha verimli hale getirebilirsiniz.",
    },
    {
      title: "Bilgisayarla Görme",
      description:
        "Sistemlerin görsel verileri anlamasını ve yorumlamasını sağlamak için kullanılır; örneğin resimler ve videolar.",
      modalTitle: "Bilgisayarla Görme",
      modalBody:
        "Bilgisayarla görme, sistemlerin görsel verileri anlamasını ve analiz etmesini sağlar. Bu teknoloji, güvenlik, sağlık ve perakende sektörlerinde etkin bir şekilde kullanılmaktadır.",
    },
  ];

  const handleShow = (solutionTitle) => {
    setShowModal({ [solutionTitle]: true });
  };

  const handleClose = (solutionTitle) => {
    setShowModal({ [solutionTitle]: false });
  };

  return (
    <div>
      <Helmet>
        <title>
          Yapay Zeka Çözümleri | İşinizi Dijital Dünyada Güçlendirin
        </title>
        <meta
          name="description"
          content="Yapay zeka çözümleri ile iş süreçlerinizi dönüştürün. Makine öğrenmesi, doğal dil işleme ve bilgisayarla görme gibi çözümlerle verimliliği artırın."
        />
        <meta
          name="keywords"
          content="yapay zeka, makine öğrenmesi, doğal dil işleme, bilgisayarla görme, chatbot, yapay zeka çözümleri, iş süreçleri"
        />
        <meta name="author" content="Romsis Yazılım" />
        <link rel="canonical" href="https://www.romsis.com/yapay-zeka" />
      </Helmet>

      <div className="yapaygiris">
        <div className="yapaygiris2">
          <h1 className="yapay-title">
            Yapay Zeka Çözümleri ile İşinizi Güçlendirin
          </h1>
          <p className="yapay-par fs-5">
            Yapay zeka teknolojileriyle iş süreçlerinizi dönüştürerek,
            operasyonel verimliliği artırabilirsiniz. Verileri analiz eden ve
            otomatikleştiren sistemler, daha hızlı ve doğru kararlar almanıza
            yardımcı olur. Rutin görevlerin otomasyonu sayesinde zaman ve kaynak
            tasarrufu sağlarken, hata oranını azaltırsınız.
          </p>
        </div>
      </div>

      {/* Yapay Zeka Çözümleri Bölümü */}
      <Container fluid className="my-5">
        <h2 className="uibaslik text-center mb-4">Yapay Zeka Çözümlerimiz</h2>
        <Row>
          {solutions.map((solution) => (
            <Col xs={12} md={4} key={solution.title}>
              <Card className="yz-kart">
                <Card.Body className="text-center text-secondary">
                  <Card.Title className="fw-bolder fs-3">
                    {solution.title}
                  </Card.Title>
                  <Card.Text>{solution.description}</Card.Text>
                  <Button onClick={() => handleShow(solution.title)}>
                    Daha Fazla Bilgi
                  </Button>
                </Card.Body>
              </Card>

              {/* Modal */}
              <Modal
                show={showModal[solution.title]}
                onHide={() => handleClose(solution.title)}
                scrollable
              >
                <Modal.Header closeButton>
                  <Modal.Title>{solution.modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{solution.modalBody}</Modal.Body>
                <Modal.Footer>
                  <Button
                    variant="secondary"
                    onClick={() => handleClose(solution.title)}
                  >
                    Kapat
                  </Button>
                </Modal.Footer>
              </Modal>
            </Col>
          ))}
        </Row>
      </Container>

      {/* İletişim */}
      <Row className="text-center m-5">
        <Col>
          <h3 style={{ color: "#142e70" }}>
            Web yazılım çözümlerimizle işinizi dijital dünyada bir adım öne
            taşıyın; özelleştirilmiş, hızlı ve güvenilir sistemlerle başarıyı
            yakalayın!
          </h3>
          <Link to="/Teklif" onClick={() => window.scrollTo(0, 0)}>
            <Button
              style={{ color: "aliceblue", backgroundColor: "#142e70" }}
              size="lg"
            >
              Teklif Al
            </Button>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export default Ai;
