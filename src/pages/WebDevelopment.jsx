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
      aciklama: "İhtiyaçlarınızı anlamak ve doğru çözümü belirlemek için derinlemesine analiz yapıyoruz.",
      img: "/img/analysis.png",
    },
    {
      baslik: "2. Tasarım",
      aciklama: "Kullanıcı dostu ve estetik açıdan çekici web tasarımları geliştiriyoruz.",
      img: "/img/web-design.png",
    },
    {
      baslik: "3. Geliştirme",
      aciklama: "En güncel yazılım teknolojileri ile uygulamalarınızı geliştiriyoruz.",
      img: "/img/wrench.png",
    },
    {
      baslik: "4. Teslimat",
      aciklama: "Projenizi zamanında teslim ediyor ve müşteri memnuniyetini ön planda tutuyoruz.",
      img: "/img/checked.png",
    },
  ];

  const webYazilimBilesenleri = [
    {
      baslik: "Frontend (Önyüz)",
      aciklama:
        "Web sitenizin görsel tasarımı ve kullanıcı etkileşimi burada yönetilir.",
      detay:
        "HTML, CSS ve JavaScript kullanarak kullanıcı dostu, estetik ve mobil uyumlu tasarımlar sunuyoruz.",
    },
    {
      baslik: "Backend (Arka Yüz)",
      aciklama: "Veri yönetimi ve uygulama sunucu işlemleri arka planda gerçekleşir.",
      detay:
        "Node.js, PHP, Python gibi dillerle sunucu ve veritabanı yönetimi sağlayarak uygulamanızın güvenliğini sağlıyoruz.",
    },
    {
      baslik: "Veritabanı Yönetimi",
      aciklama:
        "Verilerinizin güvenli ve düzenli bir şekilde depolanması sağlanır.",
      detay:
        "MySQL, PostgreSQL, MongoDB gibi veritabanlarıyla veri yönetimi ve optimizasyonu sağlıyoruz.",
    },
    {
      baslik: "Güvenlik",
      aciklama: "Web sitenizin güvenliği bizim önceliğimizdir.",
      detay:
        "SSL sertifikaları, kullanıcı doğrulama, veri şifreleme ve diğer güvenlik önlemleri ile web sitenizi koruma altına alıyoruz.",
    },
    {
      baslik: "SEO ve Dijital Pazarlama",
      aciklama: "Web sitenizin arama motorlarında üst sıralarda yer almasını sağlıyoruz.",
      detay:
        "SEO dostu yapılar ve etkili dijital pazarlama stratejileriyle web sitenizin görünürlüğünü artırıyoruz.",
    },
    {
      baslik: "API Entegrasyonu",
      aciklama:
        "Farklı uygulamalar arasında sorunsuz veri paylaşımını sağlıyoruz.",
      detay:
        "RESTful API'ler ve GraphQL ile uygulamalar arasında veri entegrasyonu sağlıyoruz.",
    },
  ];

  const carouselItems = [
    {
      imgSrc: "/img/wep/webyazilim3.webp",
      altText: "Web Tasarım",
      title: "Modern Web Tasarım",
      description: "Görsel olarak çekici ve fonksiyonel web siteleri tasarlıyoruz.",
    },
    {
      imgSrc: "/img/wep/webyazilim1.webp",
      altText: "Özel Yazılım Geliştirme",
      title: "Özel Yazılım Geliştirme",
      description: "İhtiyaçlarınıza uygun özel yazılım çözümleri sunuyoruz.",
    },
    {
      imgSrc: "/img/wep/webyazilim2.webp",
      altText: "SEO Hizmetleri",
      title: "SEO ve Dijital Pazarlama",
      description: "Web sitenizin dijital dünyada daha fazla görünür olmasını sağlıyoruz.",
    },
  ];

  return (
    <div>
      <Helmet>
        <title>Web Yazılım Hizmetleri | Özel Yazılım ve Web Tasarımı | CyberKoc</title>
        <meta
          name="description"
          content="CyberKoc'un web yazılım hizmetleriyle modern, güvenli ve SEO uyumlu web siteleri oluşturun. Özelleştirilebilir çözümlerle dijital pazarlama ve SEO odaklı başarı."
        />
        <meta
          name="keywords"
          content="web yazılım, özel yazılım, SEO, dijital pazarlama, API entegrasyonu, frontend, backend, güvenlik, web tasarımı"
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
            Web yazılım hizmetlerimiz, işletmelerin dijital dönüşümünü hızlandırır.
            SEO uyumlu, kullanıcı dostu web tasarımları, güvenli ve hızlı yazılım çözümleriyle dijital dünyada başarıya ulaşın.
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
            Web yazılım çözümlerimizle işinizi dijital dünyada bir adım öne taşıyın; özelleştirilmiş, hızlı ve güvenilir sistemlerle başarıyı yakalayın!
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
