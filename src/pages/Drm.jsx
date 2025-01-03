import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Accordion, Modal } from "react-bootstrap";
import "../css/OzelYazilim.css"
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";

const Drm = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalContent, setModalContent] = useState("");

  const handleModalShow = (title, content) => {
    setModalTitle(title);
    setModalContent(content);
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };


  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const drmData = {
    definition: {
      title: "DRM NEDİR ?",
      points: [
        {
          title: "DRM Nedir?",
          description:
            "Dijital Haklar Yönetimi (DRM), dijital içeriklerin, özellikle dijital medya ve yazılımların, içerik sahiplerinin izin verdiği şekilde kullanılmasını sağlamak amacıyla kullanılan bir dizi teknolojik önlem içeren bir sistemdir."
        },
        {
          title: "İçerik Koruma",
          description:
            "DRM, dijital içeriklerin izinsiz kopyalanmasını, dağıtılmasını ve değiştirilmesini engellemeyi amaçlar."
        },
        {
          title: "İzin Yönetimi",
          description:
            "İçerik sağlayıcıları, DRM sistemleri aracılığıyla içeriklerini kimlerin, hangi koşullarda ve ne şekilde kullanabileceğini belirleyebilir."
        },
        {
          title: "Kopya Koruma",
          description:
            "DRM, içeriklerin kopyalanmasını engelleyerek, içeriklerin orijinal halinin yalnızca yetkilendirilmiş kişiler tarafından kullanılmasını sağlar."
        },
        {
          title: "Şifreleme ve Güvenlik",
          description:
            "DRM, içeriklerin şifrelenmesini sağlar. Bu, içeriğin yalnızca uygun anahtar veya yetkilendirme ile erişilebilir olmasını sağlar."
        },
        {
          title: "Dağıtım Kontrolü",
          description:
            "DRM, dijital içeriklerin hangi platformlarda ve nasıl dağıtılacağını belirleyebilir, böylece içerik sahibi kontrolü elinde tutar."
        },
        {
          title: "Hikaye İzleme ve Raporlama",
          description:
            "DRM sistemleri, içeriklerin nasıl ve ne sıklıkla kullanıldığını izleyebilir ve içerik sahiplerine raporlar sunabilir."
        },
        {
          title: "Yasal Uygulamalar",
          description:
            "DRM, içerik sahiplerinin yasal haklarını koruyarak izinsiz kullanımlara karşı hukuki önlemler almasına olanak tanır."
        },
        {
          title: "Farklı DRM Sistemleri",
          description:
            "DRM teknolojisi, farklı endüstriler için farklı türlerde uygulanabilir (örneğin, müzik, film, yazılım, e-kitaplar). Her bir endüstri kendi özel DRM çözümlerine sahip olabilir."
        },
        {
          title: "Çok Katmanlı Koruma",
          description:
            "DRM, farklı teknolojiler ve yöntemler kullanarak içerik koruma seviyelerini artırabilir. Bu, şifreleme, dijital su işaretleme ve içerik kısıtlamaları gibi önlemleri içerebilir."
        }
      ]
    },
    types: {
      title: "DRM Türleri",
      items: [
        {
          key: "0",
          header: "Su İzleme (Watermarking)",
          body: "İçeriklerin gizli bir izle işaretlenmesi, bu sayede içeriklerin izinsiz olarak paylaşılması durumunda kaynağın izlenebilmesi sağlanır."
        },
        {
          key: "1",
          header: "Şifreleme",
          body: "İçerik dosyaları genellikle özel bir şifreleme yöntemi ile korunur ve yalnızca lisanslı kullanıcılar şifreyi çözebilir."
        },
        {
          key: "2",
          header: "Donanım Tabanlı DRM",
          body: "Bazı DRM sistemleri, içeriklerin yalnızca belirli donanım cihazlarında çalışmasına izin verir. Bu tür DRM, genellikle video ve müzik içeriklerinde kullanılır."
        }
      ]
    }
  };
  

  return (
    <>

<Helmet>
        <title>Dijital Haklar Yönetimi (DRM) Nedir? | DRM Çözümleri ve Türleri</title>
        <meta name="description" content="Dijital Haklar Yönetimi (DRM) ile içeriklerinizi koruma ve güvenliğini sağlama hakkında detaylı bilgi. DRM türleri ve uygulama alanları hakkında her şey." />
        <meta name="keywords" content="DRM, Dijital Haklar Yönetimi, içerik koruma, DRM türleri, şifreleme, su izleme, içerik yönetimi" />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Dijital Haklar Yönetimi (DRM) Hakkında Her Şey" />
        <meta property="og:description" content="Dijital içeriklerinizi korumak için kullanılan DRM çözümleri. DRM türleri ve uygulama alanları hakkında kapsamlı bilgiler." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <Container className="mt-5">
      {/* Hero Section */}
      <Row className=" justify-content-center">
        <Col md={12}>
          <Card className="drm-giris border-0 shadow-lg text-center mb-5">
            <Card.Body className="d-flex justify-content-center align-items-center" >
            <div className="drm-giris-text p-5">
            <h1 className="display-4 ">Dijital Haklar Yönetimi (DRM) Hakkında Her Şey</h1>
              <p className="lead">
                Dijital içeriklerinizin korunması için kullanılan Dijital Haklar Yönetimi (DRM) sisteminin tüm detayları burada!
              </p>
              <Button variant="primary"  href="#definition-section" className="w-25 border-0" style={{backgroundColor:"#041238"}}>
                Daha Fazla Bilgi
              </Button>
            </div>
          
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* DRM Tanımı */}
      <section id="definition-section" className="mb-5">
  <Row>
    <Col md={12}>
      <h2 className="text-center uibaslik">{drmData.definition.title}</h2>
      <ul className="drm-ul">
        {drmData.definition.points.map((item, index) => (
          <li key={index} className="drm-li">
            <strong>{item.title}:</strong> {item.description}
          </li>
        ))}
      </ul>
    </Col>
  </Row>
</section>


      {/* Accordion ile DRM Türleri */}
      <section id="types-section" className="mb-5">
  <Row>
    <Col md={12}>
      <h2 className="text-center uibaslik">{drmData.types.title}</h2>
      <Accordion defaultActiveKey="0" className="drm-ac">
        {drmData.types.items.map(item => (
          <Accordion.Item eventKey={item.key} key={item.key} className="drm-acc">
            <Accordion.Header >{item.header}</Accordion.Header>
            <Accordion.Body >{item.body}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </Col>
  </Row>
</section>


      {/* Uygulama Alanları */}
      <section id="applications-section" className="mb-5">
        <Row>
          <Col md={12}>
            <h2 className="text-center uibaslik">DRM Uygulama Alanları</h2>
            <p className="drm-uy-par">
              DRM, çok çeşitli dijital içeriklerde kullanılmaktadır. İşte bazı önemli uygulama alanları:
            </p>
            <Row>
              <Col sm={12} md={6}>
                <Card className="drm-kart">
                  <Card.Body className="drm-alt" >
                    <Card.Title className="text-secondary fw-bold" >Müzik ve Video Dağıtımı</Card.Title>
                    <Card.Text className="text-secondary" >
                      Spotify, Netflix ve Amazon Prime Video gibi dijital medya platformları, içeriklerini DRM kullanarak korur.
                    </Card.Text>
                    <Button variant="primary" className="mt-2" onClick={() => handleModalShow("Müzik ve Video Dağıtımı", "Dijital medya platformları, müzik ve video içeriklerini telif hakkı sahiplerinin izin verdiği şekilde sunmak için Dijital Haklar Yönetimi (DRM) kullanır. Örneğin, Spotify, Netflix ve Amazon Prime Video, içeriklerini DRM ile koruyarak yalnızca lisanslı kullanıcıların erişimini sağlar ve izinsiz kopyalama veya dağıtımı engeller. DRM, içeriklerin orijinal halini koruyarak telif hakkı ihlallerini önler.")}>Detaylı Oku</Button>
                  </Card.Body>
                </Card>
              </Col>
              <Col sm={12} md={6}>
                <Card className="drm-kart">
                  <Card.Body className="drm-alt" >
                    <Card.Title className="text-secondary fw-bold" >E-Kitaplar</Card.Title>
                    <Card.Text className="text-secondary" >
                      E-kitap platformları, kitapların izinsiz paylaşılmasını engellemek amacıyla DRM kullanır.
                    </Card.Text>
                    <Button variant="primary" className="mt-2" onClick={() => handleModalShow("E-Kitaplar", "E-kitap platformları, dijital kitapların izinsiz paylaşılmasını ve kopyalanmasını önlemek amacıyla Dijital Haklar Yönetimi (DRM) teknolojisini kullanır. DRM, e-kitapların yalnızca yetkilendirilmiş kullanıcılar tarafından belirli koşullarda erişilmesini sağlar. Örneğin, DRM sayesinde, bir kullanıcı kitabı yalnızca satın aldığı cihaza indirip okuyabilir ve kitabı başka kişilere iletmesi engellenir. Ayrıca, DRM teknolojisi, kitapların kopyalanmasını, baskı yapılmasını veya farklı platformlarda dağıtılmasını kısıtlar. Bu sayede, yazarların ve yayıncıların telif hakları korunur ve e-kitapların izinsiz dağıtımına karşı güvenlik sağlanır.")}>Detaylı Oku</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </section>


      {/* Modal */}
      <Modal show={showModal} onHide={handleModalClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-secondary" >{modalTitle}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-secondary" >{modalContent}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleModalClose}>
            Kapat
          </Button>
        </Modal.Footer>
      </Modal>

                          {/* İletişim */}
<Row className="text-center m-5">
<Col>
                      
    <h3 style={{color:'#142e70'}} >DRM (Dijital Hak Yönetimi) çözümlerimizle ilgili detaylı bilgi almak ve size özel bir teklif oluşturmak için bizimle iletişime geçin!</h3>
    <Link to="/Teklif" onClick={scrollToTop}>
    <Button style={{color:'aliceblue', backgroundColor:'#142e70'}} size="lg">Teklif Al</Button>
    </Link>
     
</Col>
</Row>

    </Container>

    </>
  
  );
};

export default Drm;



