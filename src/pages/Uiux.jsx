import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import uiux from "../assets/uiux.webp"
import uilist from "../assets/responsive-design.png"
import { Helmet } from 'react-helmet'; 

const Uiux = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const uiuxsurec = [
    {
      id: 1,
      title: "Kullanıcı Araştırması",
      description: "  Hedef kitlenin ihtiyaçlarını ve beklentilerini anlamak için yapılan detaylı araştırmalar sürecin ilk adımıdır."
    },
    {
      id: 2,
      title: "Prototipleme",
      description: "Fikirlerin hızlı bir şekilde test edilebilmesi için düşük veya yüksek çözünürlüklü prototipler oluşturulur."
    },
    {
      id: 3,
      title: "Test Etme",
      description: "Prototipler, kullanıcıların geri bildirimlerini almak ve geliştirmek için test edilir."
    },
    {
      id: 4,
      title: "İterasyon",
      description: "Kullanıcı geri bildirimlerine göre sürekli iyileştirmeler yapılarak süreç tamamlanır."
    },
]
const uiuxteknolojiler = [
    {
      id: 1,
      image:"./img/teknoloji/figma.png",
      title: "Figma",
      description: "  Figma, kullanıcı dostu arayüz tasarımları oluşturmak için popüler bir araçtır."
    },
    {
      id: 2,
      image:"./img/teknoloji/adobe.png",
      title: "Adobe XD",
      description: "Adobe XD, prototipleme ve tasarım için güçlü bir platformdur."
    },
    {
      id: 3,
      image:"./img/teknoloji/Sketch.png",
      title: "Sketch",
      description: "Sketch, UI ve UX tasarımında yaygın olarak kullanılan bir yazılımdır."
    },
    {
      id: 4,
      image:"./img/teknoloji/zeplinn.jpg",
      title: "Zeplin",
      description: "Tasarımcılar ve geliştiriciler arasında köprü görevi gören bir araç."
    },
]

  return (
    <Container fluid className="py-4" style={{ backgroundColor: '#f8f9fa' }}>
          <Helmet>
        <title>UI & UX Tasarımı | Modern Web ve Mobil Çözümler</title>
        <meta name="description" content="UI ve UX tasarımı, kullanıcı dostu modern web ve mobil uygulama çözümleri sunmak için kritik öneme sahiptir. Figma, Adobe XD, Sketch gibi araçlarla gerçekleştirilir." />
        <meta name="keywords" content="UI tasarımı, UX tasarımı, kullanıcı deneyimi, kullanıcı arayüzü, Figma, Adobe XD, Sketch, Zeplin, prototipleme, web tasarımı" />
        <meta property="og:title" content="UI & UX Tasarımı" />
        <meta property="og:description" content="UI & UX tasarımı, kullanıcı dostu web ve mobil çözümleri için temel unsurları içerir." />
        <meta property="og:image" content={uiux} />
        <meta property="og:url" content="yourwebsite.com/ui-ux" />
      </Helmet>
      <Container>
      <Container className='uigriris'>
      <h1 className="uibaslik text-center mb-4 ">UI & UX TASARIMI</h1>
         
         <img src={uiux} alt="" className='uimg' />
      </Container>

      <Container className='m-5'>
      <h4 className='mt-3 mb-5 text-center' style={{color:'#142e70'}}> UI (Kullanıcı Arayüzü) ve UX (Kullanıcı Deneyimi) tasarımı, kullanıcı odaklı modern web ve mobil çözümlerin temelini oluşturur. UI, görsel estetiğe ve kullanılabilirliğe odaklanırken; UX, kullanıcıların etkileşimlerini optimize ederek memnuniyeti artırmayı hedefler. Güncel tasarım trendleri ve teknolojilerle desteklenen UI/UX süreçleri, etkili bir dijital varlık yaratmak için kritik öneme sahiptir.</h4>

      </Container>


        {/* Güncel Tasarım Trendleri Bölümü */}
        <Row className="mt-5 mb-5 d-flex justify-content-center align-items-center">
        <Col className='mt-5 d-flex justify-content-center'>
          <img src={uilist} alt="ui & ux list" className='pcimg list-unstyled' />
        </Col>
          <Col>
            <h2 className="uibaslik ">Güncel Tasarım Trendleri</h2>
            <ul className='mt-5 fs-5 text-center' style={{color:'#4D657D'}}>
              <li className="mb-2 list-unstyled">
                <strong>Minimalist Tasarım</strong> 
              </li>
              <li className="mb-2 list-unstyled">
                <strong>Karanlık Mod</strong>
              </li>
              <li className="mb-2 list-unstyled">
                <strong>Mikro Animasyonlar</strong> 
              </li>
              <li className="mb-2 list-unstyled">
                <strong>3D Görseller</strong>
              </li>
            </ul>
          </Col>
        </Row>

        {/* UI & UX Süreci Bölümü */}
        <Row className="m-5">
          <Col>
            <h2 className="uibaslik  mb-5 fs-1">UI & UX Süreci</h2>
            <Row>
            {uiuxsurec.map((at)=>{
              const { id, title, description} = at;
              return(
                <Col md={6} className="mb-3">
                <Card key={id} className='uikart' >
                  <Card.Body>
                 
                    <Card.Title className='text-center fs-4 text-info'>{title}</Card.Title>
                    <Card.Text className='text-center fs-6' style={{color:'#4D657D'}} > {description} </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              )
            }) }
            
            </Row>
          </Col>
        </Row>

        {/* UI & UX için Kullanılan Teknolojiler Bölümü */}
        <section className="py-5 text-center">
  <div className="container">
    <h2 className="uibaslik display-5 mb-4">UI & UX Kullanılan Teknolojiler</h2>
    <div className="row justify-content-center text-center gap-2">
      {uiuxteknolojiler.map(tool => (
        <div key={tool.id} className="col-md-4">
          <div className="card shadow-lg border-0"> 
            <div className="d-flex justify-content-center"> 
              <img
                src={tool.image}
                className="card-img-top"
                alt={tool.name}
                style={{ width: '70px', height: '70px' }} 
              />
            </div>
            <div className="card-body">
              <h5 className="card-title alt-baslik">{tool.name}</h5>
              <p className="card-text text-secondary">{tool.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
      </Container>

      <Row className="text-center m-5">
<Col>
                      
    <h3 style={{color:'#142e70'}} >Hayalinizdeki tasarımı gerçeğe dönüştürmek için ilk adımı atın, teklifinizi hemen alın!</h3>
    <Link to="/Teklif" onClick={scrollToTop}>
    <Button style={{color:'aliceblue', backgroundColor:'#142e70'}} size="lg">Teklif Al</Button>
    </Link>
     
</Col>
</Row>
    </Container>
  );
};

export default Uiux;




