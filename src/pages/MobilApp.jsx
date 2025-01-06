import React from 'react'
import mobilimg from "../assets/mobilgiris.jpg"
import { Col, Row, Card, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import "../css/OzelYazilim.css"
import { Helmet } from 'react-helmet';



const MobilApp = () => {

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const mobilhizmetler = [
    {
      id: 1,
      image: "./img/swiperslider1.jpg",
      title: "iOS Uygulama Geliştirme",
      par:"iOS uygulama geliştirme hizmetlerimiz, Apple kullanıcıları için güvenli, hızlı ve kullanıcı dostu çözümler sunar. Yenilikçi özelliklerle iPhone ve iPad için benzersiz deneyimler yaratıyoruz.",
      
    },
    {
      id: 2,
      image: "./img/swiperslider1.jpg",
      title: "Android Uygulama Geliştirme",
      par:"Android uygulama geliştirme ile geniş kitlelere ulaşın. Güçlü performans, modern tasarım ve cihaz uyumluluğu sağlayarak işinizi büyütmek için optimize edilmiş çözümler sunuyoruz.",
      
    },
    {
      id: 3,
      image: "./img/swiperslider1.jpg",
      title: "Çapraz Platform Uygulama Geliştirme",
      par:"Tek kod tabanıyla iOS ve Android’de çalışabilen uygulamalar geliştirin. Zaman tasarrufu sağlayan, maliyeti düşüren ve performansı artıran çözümlerimizle öne çıkın.",
      
    },
    {
      id: 4,
      image: "./img/swiperslider1.jpg",
      title: "Akıllı Saat Uygulama Sistemleri",
      par:"Akıllı saat uygulamaları ile giyilebilir teknoloji dünyasına adım atın. Sağlık, fitness ve bildirim yönetimi için özel çözümlerle kullanıcılarınızın hayatını kolaylaştırıyoruz.",
      
    },
    {
      id: 5,
      image: "./img/swiperslider1.jpg",
      title: "E-ticaret ve Mobil Ödeme Uygulamaları",
      par:"E-ticaret uygulamalarıyla satışlarınızı artırın. Hızlı, güvenli ödeme sistemleri ve kullanıcı dostu arayüzlerle mobil alışveriş deneyimini geliştiren yenilikçi çözümler sunuyoruz.",
      
    },
    {
      id: 5,
      image: "./img/swiperslider1.jpg",
      title: "Artırılmış Gerçeklik (AR) Uygulamaları",
      par:"AR uygulamalarıyla ürün deneyimini artırın. Eğitimden e-ticarete yenilikçi çözümlerle kullanıcıların dünyasını zenginleştiren artırılmış gerçeklik teknolojisiyle geleceği yakalayın.",
      
    },
  ]

  return (
    <>
       <Helmet>
        <title>Mobil Uygulama Geliştirme Hizmetleri - iOS ve Android</title>
        <meta name="description" content="Özel mobil uygulama geliştirme hizmetlerimiz ile iOS ve Android platformlarında modern, kullanıcı dostu ve yüksek performanslı uygulamalar sunuyoruz." />
        <meta name="keywords" content="Mobil uygulama, iOS, Android, çapraz platform, e-ticaret uygulamaları, akıllı saat, artırılmış gerçeklik" />
        <meta property="og:title" content="Mobil Uygulama Geliştirme Hizmetleri - iOS ve Android" />
        <meta property="og:description" content="Özel mobil uygulama geliştirme hizmetlerimizle işletmenizi dijital dünyada öne taşıyoruz. iOS ve Android çözümleri sunuyoruz." />
        <meta property="og:image" content={mobilimg} />
      </Helmet>
          
    <div className="mobilgiris">
    <Row className="mt-5 p-5 d-flex flex-wrap justify-content-between text-center align-items-center">
      
        <Col md={6} className="d-flex justify-content-center">
            <img className="mobil-first-img" src={mobilimg} alt="Mobil uygulama resmi" />
        </Col>

     
        <Col md={6} className="first-text">
            <h1 className="mobil-title">Özel Mobil Uygulama Geliştirme Hizmetleri - iOS ve Android Çözümleri</h1>
            <p className="first-par text-center ">
            Mobil uygulama geliştirme hizmetlerimizle işletmenizi dijital dünyada öne taşıyoruz. Uzman ekibimiz, iOS ve Android platformları için kullanıcı dostu, yüksek performanslı ve modern uygulamalar sunar. İş süreçlerinizi kolaylaştıran, müşteri deneyimini iyileştiren ve markanızı güçlendiren özel çözümlerle mobil teknolojilerin gücünü keşfedin!
            </p>
        </Col>
    </Row>

</div>
    {/* Hizmetler */}
    <div>
      <h2 className='mobilhizmetlerh2'>HİZMETLERİMİZ</h2>
      <Row className="mobil-hizmetler">
    {mobilhizmetler.map((ag)=>{
      const {id, title, par}= ag
      return(
        <Col md={4} >
                        <Card className=" border-0" key={id}>
                            <Card.Body className='mobil-hizmetler-kart'>
                                <Card.Title className='fs-4 text-info' >{title}</Card.Title>
                                <Card.Text style={{color:'#142e70'}} >
                                {par}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
      )
    })

    }
  
                
                </Row>
    </div>
      {/* Hizmet Süreci */}
   <div className='hiz-surec'>
              
   <Row className="m-5 text-center">
    <Col>
       <h2 className='mobilhizmetlerh2 fs-1' >Hizmet Sürecimiz</h2>
       <p className='fs-5' style={{color:'#142e70'}} >Mobil uygulama geliştirme sürecimiz dört temel adımdan oluşur:
       </p>
    </Col>
  </Row>
  <Row className='hiz-surec-genel-kart'>
   <Col md={3} className="hiz-surec-kart">
       <Card className='border-0' >
           <Card.Body>
               <Card.Title  className='text-info fw-bold fs-4' >Keşif ve Analiz</Card.Title>
               <Card.Text style={{color:'#142e70'}} >  İhtiyaçlarınızı anlar ve stratejik çözümler tasarlarız.</Card.Text>
           </Card.Body>
       </Card>
   </Col>
   <Col md={3} className="hiz-surec-kart">
       <Card className='border-0' >
           <Card.Body>
               <Card.Title className='text-info fw-bold fs-4' >Tasarım ve Prototip</Card.Title>
               <Card.Text style={{color:'#142e70'}} >Kullanıcı odaklı arayüzler tasarlar ve test ederiz.</Card.Text>
           </Card.Body>
       </Card>
   </Col>
   <Col md={3} className="hiz-surec-kart">
       <Card className='border-0' >
           <Card.Body>
               <Card.Title className='text-info fw-bold fs-4' >Kodlama ve Test</Card.Title>
               <Card.Text style={{color:'#142e70'}} >Performansı optimize edilmiş, hatasız uygulamalar geliştiririz.</Card.Text>
           </Card.Body>
       </Card>
   </Col>
   <Col md={3} className="hiz-surec-kart">
       <Card className='border-0' >
           <Card.Body>
               <Card.Title className='text-info fw-bold fs-4' >Yayınlama ve Destek</Card.Title>
               <Card.Text style={{color:'#142e70'}} >Uygulamanızı markete sunar ve sürekli destek sağlarız.</Card.Text>
           </Card.Body>
       </Card>
   </Col>
 </Row>

   </div>
                    {/* İletişim */}
<Row className="text-center m-5">
<Col>
                      
    <h3 style={{color:'#142e70'}} >İhtiyacınıza uygun mobil uygulama çözümleri için hemen bizimle iletişime geçin!</h3>
    <Link to="/Teklif" onClick={scrollToTop}>
    <Button style={{color:'aliceblue', backgroundColor:'#142e70'}} size="lg">Teklif Al</Button>
    </Link>
     
</Col>
</Row>


    
    </>
  )
}

export default MobilApp



