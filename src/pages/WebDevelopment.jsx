import React, { useState } from "react";
import {
  Carousel,
  Card,
  Row,
  Col,
  Container,
  Button,
  Collapse,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const WebDevelopment = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const calismaSureci = [
    {
      baslik: "1. Analiz",
      aciklama: "Projenizin gereksinimlerini belirliyoruz.",
      img: "/img/analysis.png",
    },
    {
      baslik: "2. Tasarım",
      aciklama: "Modern ve kullanıcı odaklı tasarımlar oluşturuyoruz.",
      img: "/img/web-design.png",
    },
    {
      baslik: "3. Geliştirme",
      aciklama: "Yazılım çözümlerini uyguluyoruz.",
      img: "/img/wrench.png",
    },
    {
      baslik: "4. Teslimat",
      aciklama: "Projenizi başarıyla tamamlayıp teslim ediyoruz.",
      img: "/img/checked.png",
    },
  ];

  const webYazilimBilesenleri = [
    {
      baslik: "Frontend (Önyüz)",
      aciklama:
        "Web sitenizin kullanıcıya gösterilen kısmıdır, tasarım ve etkileşim burada yönetilir.",
      detay:
        "HTML, CSS ve JavaScript kullanarak modern, kullanıcı dostu ve mobil uyumlu tasarımlar oluşturuyoruz.",
    },
    {
      baslik: "Backend (Arka Yüz)",
      aciklama: "Veri işleme ve sunucu yönetimi backend kısmında yapılır.",
      detay:
        "Sunucular, veritabanları ve API'ler kullanılarak verilerin güvenli bir şekilde işlenmesi sağlanır. Node.js, PHP, Python gibi diller kullanılır.",
    },
    {
      baslik: "Veritabanı Yönetimi",
      aciklama:
        "Verilerin depolanması ve düzenlenmesi için veritabanları kullanılır.",
      detay:
        "MySQL, PostgreSQL gibi ilişkisel veritabanları veya MongoDB gibi NoSQL veritabanları kullanılarak veri yönetimi sağlanır.",
    },
    {
      baslik: "Güvenlik",
      aciklama: "Web uygulamanızın güvenliğini sağlamak kritik öneme sahiptir.",
      detay:
        "SSL sertifikaları, kullanıcı doğrulama, şifreleme ve diğer güvenlik önlemleri ile web yazılımınızın güvenliğini sağlıyoruz.",
    },
    {
      baslik: "SEO ve Dijital Pazarlama",
      aciklama: "Web sitenizin arama motorlarında görünürlüğünü artırıyoruz.",
      detay:
        "SEO uyumlu yapılar ve dijital pazarlama stratejileri ile web sitenizi arama motorlarında üst sıralara taşırız.",
    },
    {
      baslik: "API Entegrasyonu",
      aciklama:
        "Farklı uygulamalar arasında veri paylaşımı ve entegrasyonu sağlar.",
      detay:
        "RESTful API'ler, GraphQL gibi teknolojiler kullanarak uygulamalar arasında sorunsuz veri alışverişi sağlarız. Üçüncü parti servislerle entegrasyon gerçekleştiririz.",
    },
  ];

  const carouselItems = [
    {
      imgSrc: "/img/wep/webyazilim3.webp",
      altText: "Web Tasarım",
      title: "Modern Web Tasarım",
      description: "Estetik ve kullanıcı dostu web siteleri oluşturuyoruz.",
    },
    {
      imgSrc: "/img/wep/webyazilim1.webp",
      altText: "Özel Yazılım Geliştirme",
      title: "Özel Yazılım Geliştirme",
      description: "İhtiyaçlarınıza uygun yazılım çözümleri.",
    },
    {
      imgSrc: "/img/wep/webyazilim2.webp",
      altText: "SEO Hizmetleri",
      title: "SEO ve Dijital Pazarlama",
      description: "İşletmenizi arama motorlarında zirveye taşıyoruz.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Web Yazılım Hizmetleri - Özel Yazılım ve Web Tasarımı</title>
        <meta
          name="description"
          content="Web yazılım hizmetlerimizle, modern tasarımlar, güvenli veri işleme, SEO uyumlu çözümler ve dijital pazarlama stratejileri ile web sitenizi geliştirin."
        />
        <meta
          name="keywords"
          content="web yazılım, özel yazılım, SEO, dijital pazarlama, API entegrasyonu, frontend, backend, güvenlik, veritabanı yönetimi"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Container className="my-5">
        <h1 className="uibaslik text-center">Yenilikçi Web Çözümleri</h1>
        <Carousel>
          {carouselItems.map((item, index) => (
            <Carousel.Item key={index} className="wy-car">
              <img
                className="d-block w-100 "
                src={item.imgSrc}
                alt={item.altText}
              />
              <Carousel.Caption className="wy-caption">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <div style={{ backgroundColor: "#f8f9fa", padding: "50px 20px" }}>
        <Container>
          <p className="fs-4 text-center" style={{ color: "#647F93" }}>
            Web yazılım hizmetleri, işletmelerin dijital varlıklarını
            güçlendirir ve SEO uyumlu, kullanıcı dostu web siteleri sunar.
            Özelleştirilebilir çözümlerle arama motorlarında üst sıralara
            çıkmanıza yardımcı olurken, kullanıcı deneyimini ve güvenliği ön
            planda tutar. Modern teknolojilerle optimize edilmiş web
            yazılımları, her cihazda mükemmel performans sağlar.
          </p>
        </Container>
      </div>

      {/* Web Yazılımının Ana Bileşenleri */}
      <Container className="my-5">
        <h2 className="uibaslik text-center mb-4">
          Web Yazılımının Ana Bileşenleri
        </h2>
        <Row>
          {webYazilimBilesenleri.map((bilesen, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="wy-kart d-flex text-center">
                <Card.Body>
                  <Card.Title className="wy-title">{bilesen.baslik}</Card.Title>
                  <Card.Text className="wy-par">{bilesen.aciklama}</Card.Text>
                  <Button
                    className="wy-buton"
                    onClick={() => handleToggle(index)}
                    aria-controls={`bilesen-detail-${index}`}
                    aria-expanded={openIndex === index}
                  >
                    Detaylı İncele
                  </Button>
                  <Collapse in={openIndex === index}>
                    <div id={`bilesen-detail-${index}`} className="wy-par mt-3">
                      {bilesen.detay}
                    </div>
                  </Collapse>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Çalışma Süreci */}
      <div style={{ backgroundColor: "#f1f1f1", padding: "50px 20px" }}>
        <Container>
          <h2 className="uibaslik text-center mb-4">Çalışma Sürecimiz</h2>
          <Row>
            {calismaSureci.map((surec, index) => (
              <Col md={3} className="text-center" key={index}>
                <img
                  src={surec.img}
                  alt="wy çalışma süreci"
                  style={{ maxWidth: "80px", marginBottom: "1rem" }}
                />
                <h4 className="uibaslik">{surec.baslik}</h4>
                <p className="uibaslik">{surec.aciklama}</p>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* İletişim */}
      <Row className="text-center m-5">
        <Col>
          <h3 style={{ color: "#142e70" }}>
            Web yazılım çözümlerimizle işinizi dijital dünyada bir adım öne
            taşıyın; özelleştirilmiş, hızlı ve güvenilir sistemlerle başarıyı
            yakalayın!
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
    </div>
  );
};

export default WebDevelopment;
