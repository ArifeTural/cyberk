import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import eticaret from "../assets/eticaret.webp";
import { Helmet } from "react-helmet";

function Ecommerce() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const services = [
    {
      title: "E-Ticaret Sitesi Geliştirme",
      details: [
        "Kullanıcı dostu arayüz ve altyapılar.",
        "Mobil uyumlu (responsive) tasarımlar.",
        "Gelişmiş ürün yönetimi ve filtreleme özellikleri.",
      ],
    },
    {
      title: "Pazaryeri Entegrasyonları",
      details: [
        "Amazon, Trendyol, Hepsiburada gibi platformlarla entegrasyon.",
        "Ürün senkronizasyonu ve sipariş yönetimi.",
      ],
    },
    {
      title: "SEO ve Dijital Pazarlama",
      details: [
        "Arama motoru optimizasyonu (SEO) ile organik trafiği artırma.",
        "Google Ads, sosyal medya reklamları, e-posta pazarlama gibi dijital reklam kampanyaları.",
      ],
    },
    {
      title: "Ödeme ve Lojistik Çözümleri",
      details: [
        "Güvenli ödeme altyapıları (iyzico, PayPal, Stripe, vb.).",
        "Kargo takip ve entegrasyon sistemleri.",
      ],
    },
    {
      title: "Müşteri Deneyimi Optimizasyonu",
      details: [
        "Chatbot entegrasyonları ve 7/24 müşteri desteği.",
        "Kişiselleştirilmiş alışveriş deneyimi (öneri sistemleri).",
      ],
    },
    {
      title: "E-Ticaret Otomasyonları",
      details: [
        "Stok ve envanter yönetimi.",
        "Kampanya ve indirim süreçlerinin otomatik yönetimi.",
      ],
    },
  ];

  const consultingServices = [
    {
      title: "Stratejik Planlama",
      details: [
        "İşletmeler için kısa ve uzun vadeli büyüme stratejileri geliştirme.",
        "Rekabet analizi ve fırsat belirleme.",
      ],
    },
    {
      title: "Dijital Dönüşüm Danışmanlığı",
      details: [
        "Geleneksel işletme süreçlerini dijital platformlara taşıma.",
        "Bulut sistemlerine geçiş, verimlilik artırıcı teknolojiler önerisi.",
      ],
    },
    {
      title: "Pazar Araştırması ve Analiz",
      details: [
        "Hedef kitleyi tanımlama ve ihtiyaçlarını analiz etme.",
        "Sektör trendleri ve rakip analizleri.",
      ],
    },
    {
      title: "E-Ticaret Eğitimleri",
      details: [
        "İşletme sahipleri ve ekipler için e-ticaret süreçleri hakkında eğitimler.",
        "Dijital pazarlama ve satış becerileri geliştirme.",
      ],
    },
    {
      title: "Finansal ve Operasyonel Optimizasyon",
      details: [
        "Maliyet azaltıcı çözümler ve bütçe planlama.",
        "Tedarik zinciri ve lojistik süreçlerinin iyileştirilmesi.",
      ],
    },
    {
      title: "Teknoloji Danışmanlığı",
      details: [
        "İşletme ihtiyaçlarına uygun yazılım ve araçların seçimi.",
        "Özel yazılım geliştirme ve entegrasyon çözümleri.",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>E-Ticaret ve Danışmanlık Hizmetleri | Romsis</title>
        <meta
          name="description"
          content="Romsis, e-ticaret sitesi geliştirme, pazaryeri entegrasyonları, SEO ve dijital pazarlama, ödeme ve lojistik çözümleri gibi hizmetler sunuyor. E-ticaret dünyasında büyüme için en iyi çözümleri sunuyoruz."
        />
        <meta
          name="keywords"
          content="e-ticaret, danışmanlık, pazaryeri entegrasyonları, SEO, dijital pazarlama, ödeme çözümleri, lojistik, müşteri deneyimi"
        />
        <meta
          property="og:title"
          content="E-Ticaret ve Danışmanlık Hizmetleri | Romsis"
        />
        <meta
          property="og:description"
          content="Romsis, e-ticaret sitesi geliştirme ve dijital pazarlama çözümleriyle işletmenizi büyütmek için en iyi hizmeti sunuyor."
        />
        <meta property="og:image" content={eticaret} />
        <meta property="og:url" content="https://www.romsis.com/eticaret" />
        <link rel="canonical" href="https://www.romsis.com/eticaret" />
      </Helmet>
      <Container fluid className="p-4">
        <Container className="mb-5">
          <img
            src={eticaret}
            alt="E-Ticaret ve Danışmanlık Hizmetleri"
            className="eticaret-img"
          />
        </Container>

        <Row className="text-center mb-4 uibaslik">
          <Col>
            <h1 className="display-4">E-Ticaret ve Danışmanlık Hizmetleri</h1>
            <p className="lead">
              İşinizi dijital dünyada büyütmek için ihtiyacınız olan her şey bir
              arada! E-ticaret çözümleri ve danışmanlık hizmetlerimizle fark yaratın.
            </p>
          </Col>
        </Row>

        {/* E-Ticaret Hizmetleri Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4 uibaslik">E-TİCARET HİZMETLERİ</h2>
            <Row className="eticaret-kart border m-5 d-flex justify-content-center align-items-center">
              {services.map((service, index) => (
                <Col key={index} md={4} className="mb-4">
                  <Card className="border-0">
                    <Card.Body>
                      <Card.Title className="text-center uibaslik">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="eticaret-par">
                        <ul>
                          {service.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Danışmanlık Hizmetleri Section */}
        <Row className="mb-5">
          <Col>
            <h2 className="text-center mb-4 uibaslik">
              DANIŞMANLIK HİZMETLERİ
            </h2>
            <Row className="eticaret-kart border m-5 d-flex justify-content-center align-items-center">
              {consultingServices.map((service, index) => (
                <Col md={4} className="mb-3" key={index}>
                  <Card className="border-0">
                    <Card.Body>
                      <Card.Title className="text-center uibaslik">
                        {service.title}
                      </Card.Title>
                      <Card.Text className="eticaret-par">
                        <ul>
                          {service.details.map((detail, idx) => (
                            <li key={idx}>{detail}</li>
                          ))}
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* İletişim */}
        <Row className="text-center m-5">
          <Col>
            <h3 style={{ color: "#142e70" }}>
              Yenilikçi e-ticaret çözümleri ve profesyonel danışmanlık
              hizmetlerimiz hakkında teklif almak için bizimle iletişime geçin.
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
      </Container>
    </>
  );
}

export default Ecommerce;

