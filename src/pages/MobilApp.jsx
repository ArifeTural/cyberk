import React from "react";
import mobilimg from "../assets/mobilgiris.jpg";
import { Col, Row, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../css/OzelYazilim.css";
import { Helmet } from "react-helmet";

const MobilApp = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const mobilhizmetler = [
    {
      id: 1,
      image: "./img/swiperslider1.jpg",
      title: "iOS Uygulama Geliştirme",
      par: "CyberKoc.com olarak, iOS uygulama geliştirme hizmetlerimizle Apple kullanıcılarına güvenli, hızlı ve kullanıcı dostu çözümler sunuyoruz. Yenilikçi özelliklerle iPhone ve iPad için eşsiz deneyimler oluşturuyoruz.",
    },
    {
      id: 2,
      image: "./img/swiperslider1.jpg",
      title: "Android Uygulama Geliştirme",
      par: "CyberKoc.com, Android uygulama geliştirme ile geniş kitlelere hitap eder. Performanslı, modern tasarım ve uyumlu çözümlerle işinizi büyütmenizi sağlıyoruz.",
    },
    {
      id: 3,
      image: "./img/swiperslider1.jpg",
      title: "Çapraz Platform Uygulama Geliştirme",
      par: "CyberKoc.com, çapraz platform uygulama geliştirme hizmetleriyle iOS ve Android’de çalışabilen tek bir kod tabanı kullanarak maliyetleri düşürürken verimliliği artırır.",
    },
    {
      id: 4,
      image: "./img/swiperslider1.jpg",
      title: "Akıllı Saat Uygulama Sistemleri",
      par: "Akıllı saat uygulamalarıyla giyilebilir teknoloji dünyasına adım atın. Sağlık, fitness ve bildirim yönetimi için özelleştirilmiş çözümlerle kullanıcılarınızın yaşamını kolaylaştırıyoruz.",
    },
    {
      id: 5,
      image: "./img/swiperslider1.jpg",
      title: "E-ticaret ve Mobil Ödeme Uygulamaları",
      par: "E-ticaret uygulamalarıyla online satışlarınızı artırın. Güvenli ödeme sistemleri ve kullanıcı dostu arayüzlerle mobil alışveriş deneyimini iyileştirin.",
    },
    {
      id: 6,
      image: "./img/swiperslider1.jpg",
      title: "Artırılmış Gerçeklik (AR) Uygulamaları",
      par: "Artırılmış Gerçeklik (AR) uygulamaları ile kullanıcı deneyimini geliştirin. Eğitimden e-ticarete kadar pek çok alanda yenilikçi çözümler sunuyoruz.",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Mobil Uygulama Geliştirme Hizmetleri - iOS ve Android | CyberKoc</title>
        <meta
          name="description"
          content="CyberKoc.com olarak, özel mobil uygulama geliştirme hizmetleriyle iOS ve Android platformlarında yüksek performanslı, kullanıcı dostu uygulamalar sunuyoruz. Mobil uygulama geliştirme süreçlerini keşfedin."
        />
        <meta
          name="keywords"
          content="mobil uygulama geliştirme, iOS, Android, çapraz platform, e-ticaret uygulamaları, akıllı saat uygulamaları, artırılmış gerçeklik, mobil ödeme"
        />
        <meta
          property="og:title"
          content="Mobil Uygulama Geliştirme Hizmetleri - iOS ve Android | CyberKoc"
        />
        <meta
          property="og:description"
          content="CyberKoc.com olarak, iOS ve Android platformlarında modern ve güvenli mobil uygulama geliştirme hizmetleri sunuyoruz. Mobil uygulama geliştirme süreçlerimizi keşfedin."
        />
        <meta property="og:image" content={mobilimg} />
      </Helmet>

      <div className="mobilgiris">
        <Row className="mt-5 p-5 d-flex flex-wrap justify-content-between text-center align-items-center">
          <Col md={6} className="d-flex justify-content-center">
            <img
              className="mobil-first-img"
              src={mobilimg}
              alt="Mobil uygulama geliştirme"
            />
          </Col>

          <Col md={6} className="first-text">
            <h1 className="mobil-title">
              Özel Mobil Uygulama Geliştirme Hizmetleri - iOS ve Android
              Çözümleri | CyberKoc
            </h1>
            <p className="first-par text-center">
              CyberKoc.com olarak, mobil uygulama geliştirme hizmetlerimizle
              işletmenizi dijital dünyada öne taşıyoruz. Uzman ekibimizle, iOS ve
              Android platformları için kullanıcı dostu, yüksek performanslı ve
              modern uygulamalar sunuyoruz. İş süreçlerinizi hızlandıran ve
              müşteri deneyimini iyileştiren çözümlerimizle mobil teknolojilerin
              gücünü keşfedin!
            </p>
          </Col>
        </Row>
      </div>

      <div>
        <h2 className="mobilhizmetlerh2">Mobil Uygulama Geliştirme Hizmetlerimiz</h2>
        <Row className="mobil-hizmetler">
          {mobilhizmetler.map((service) => {
            const { id, title, par } = service;
            return (
              <Col md={4} key={id}>
                <Card className="border-0">
                  <Card.Body className="mobil-hizmetler-kart">
                    <Card.Title className="fs-4 text-info">{title}</Card.Title>
                    <Card.Text style={{ color: "#142e70" }}>{par}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="hiz-surec">
        <Row className="m-5 text-center">
          <Col>
            <h2 className="mobilhizmetlerh2 fs-1">Mobil Uygulama Geliştirme Süreci</h2>
            <p className="fs-5" style={{ color: "#142e70" }}>
              Mobil uygulama geliştirme sürecimiz, her aşamada kaliteli ve
              kullanıcı dostu sonuçlar elde etmek için optimize edilmiştir.
            </p>
          </Col>
        </Row>
        <Row className="hiz-surec-genel-kart">
          <Col md={3} className="hiz-surec-kart">
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="text-info fw-bold fs-4">
                  Keşif ve Analiz
                </Card.Title>
                <Card.Text style={{ color: "#142e70" }}>
                  İhtiyaçlarınızı analiz eder, stratejik çözümler oluştururuz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="hiz-surec-kart">
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="text-info fw-bold fs-4">
                  Tasarım ve Prototip
                </Card.Title>
                <Card.Text style={{ color: "#142e70" }}>
                  Kullanıcı odaklı tasarımlar ve prototipler oluştururuz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="hiz-surec-kart">
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="text-info fw-bold fs-4">
                  Kodlama ve Test
                </Card.Title>
                <Card.Text style={{ color: "#142e70" }}>
                  Performansı optimize edilmiş, hatasız mobil uygulamalar
                  geliştiririz.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} className="hiz-surec-kart">
            <Card className="border-0">
              <Card.Body>
                <Card.Title className="text-info fw-bold fs-4">
                  Yayınlama ve Destek
                </Card.Title>
                <Card.Text style={{ color: "#142e70" }}>
                  Uygulamanızı markete sunar ve sürekli teknik destek sağlarız.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      <Row className="text-center m-5">
        <Col>
          <h3 style={{ color: "#142e70" }}>
            Hemen mobil uygulama çözümleriniz için bizimle iletişime geçin!
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

export default MobilApp;

