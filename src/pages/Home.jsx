import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { Carousel } from "react-bootstrap";
import { Helmet } from 'react-helmet';

const Home = () => {
  const yazilim = [
    {
      id: 1,
      image: "./img/navi/y-zeka.webp",
      title: "Yapay Zeka Çözümleri",
      link: "/YapayZeka"
    },
    {
      id: 2,
      image: "./img/navi/d-donusum.webp",
      title: "Dijital Dönüşüm Çözümleri",
      link: "/DijitalDonusum"
    },
    {
      id: 3,
      image: "./img/navi/e-ticaret.webp",
      title: "E-Ticaret & Danışmanlık",
      link: "/Eticaret"
    },
    {
      id: 4,
      image: "./img/navi/mobil.webp",
      title: "Mobil Yazılım",
      link: "/MobilUygulama"
    },
    {
      id: 5,
      image: "./img/navi/ui.webp",
      title: "UI & UX",
      link: "/Ui&Ux"
    },
    {
      id: 6,
      image: "./img/navi/tasarim.webp",
      title: "Web Tasarım",
      link: "/WebTasarim"
    },
    {
      id: 7,
      image: "./img/navi/yazilim.webp",
      title: "Web Yazılım",
      link: "/WebYazilim"
    },
    {
      id: 8,
      image: "./img/navi/drm.webp",
      title: "DRM",
      link: "/Drm"
    },
  ];

  const steps = [
    {
      title: "1.Planlama ve Araştırma",
      content: [
      "Hedef belirliyoruz.",
      " Hedef kitle belirliyoruz.",
      "Rakip Analizi yapıyoruz."
      ],
      img: "/img/nasil/planlama.png",
      alt: "Planlama ve Araştırma",
    },
    {
      title: "2.Tasarım",
      content: [
        "Görsel Tasarım yapıyoruz.",
        "Prototip Oluşturuyoruz."
      ],
      img: "/img/nasil/tasarim.png",
      alt: "Tasarım",
    },
    {
      title: "3.Geliştirme",
      content: [
        "Frontend geliştiriyoruz.",
        "Backend geliştiriyoruz."
      ],
      img: "/img/nasil/gelistirme.png",
      alt: "Geliştirme",
    },
    {
      title: "4.Test Etme",
      content: [
        "Kullanılabilirlik testi yapıyoruz.",
        "Fonksiyonel testler yapıyoruz.",
        "Tarayıcı ve cihaz testi yaıyoruz."
      ],
      img: "/img/nasil/testetme.png",
      alt: "Test Etme",
    },
    {
      title: "5.Yayınlama",
      content: [
        "Domain ve hosting hizmeti veriyoruz.",
        "Yayınlıyoruz"
      ],
      img: "/img/nasil/yayinlama.png",
      alt: "Yayınlama",
    },
    {
      title: "6.Bakım ve Güncelleme",
      content: [
        "Performans izleme gerçekleştiriyoruz.",
        "Düzenli güncellemeler yapıyoruz."
      ],
      img: "/img/nasil/bakim.png",
      alt: "Bakım ve Güncelleme",
    },
  ];

  const tekno = [
    {
      id: 1,
      image: "/img/teknoloji/html.png",
      title: 'HTML',
      description:"Web sayfalarının iskeletini oluşturan temel işaretleme dilidir. İçerik yapısını tanımlamak için kullanılır."
    },
    {
      id: 2,
      image: "/img/teknoloji/social.png",
      title: 'CSS',
      description:"Web sayfalarının stil ve görünümünü düzenleyen dil. Renkler, yazı tipleri ve sayfa düzenlemeleri için kullanılır."
    },
    {
      id: 3,
      image: "/img/teknoloji/atom.png",
      title: 'React',
      description:"Kullanıcı arayüzü bileşenlerini oluşturmak için kullanılan popüler bir JavaScript kütüphanesidir."
    },
    {
      id: 4,
      image: "/img/teknoloji/wordpress.png",
      title: 'WordPress',
      description:"Dünyanın en popüler içerik yönetim sistemidir (CMS). Kullanıcı dostu yapısıyla web siteleri oluşturmak için kullanılır.",
    },
    {
      id: 5,
      image: "/img/teknoloji/js.png",
      title: 'JavaScript',
      description:"Web sayfalarına interaktif özellikler ekleyen, tarayıcı üzerinde çalışan bir programlama dilidir."
    },
    {
      id: 6,
      image: "/img/teknoloji/document.png",
      title: 'Vue.js',
      description:"Modern kullanıcı arayüzleri oluşturmak için kullanılan, hafif ve esnek bir JavaScript frameworkudur."
    },
    {
      id: 7,
      image: "/img/teknoloji/figma.png",
      title: 'Figma',
      description:"Web ve mobil uygulama arayüzlerinin tasarlanması için kullanılan bulut tabanlı bir tasarım aracıdır."
    },
    {
      id: 8,
      image: "/img/teknoloji/mysql.png",
      title: 'MySQL',
      description:"Web uygulamalarında veritabanı yönetimi için kullanılan popüler bir açık kaynaklı veritabanı yönetim sistemidir."
    },
    {
      id: 9,
      image: "/img/teknoloji/nodejs.png",
      title: 'Node.js',
      description:"JavaScript çalıştıran açık kaynaklı bir platformdur. Yüksek performanslı web uygulamaları geliştirmek için kullanılır."
    },
    {
      id: 10,
      image: "/img/teknoloji/php.png",
      title: 'PHP',
      description:"Sunucu tarafında çalışan bir betik dilidir ve dinamik web sayfaları oluşturmak için yaygın olarak kullanılır."
    },
    {
      id: 11,
      image: "/img/teknoloji/bootstrap.png",
      title:'Bootstrap',
      description:"Hızlı ve kolay bir şekilde duyarlı web siteleri oluşturmak için kullanılan popüler bir CSS frameworkudur."
    },
    {
      id: 12,
      image: "/img/teknoloji/word-image-720-1.png",
      title: 'ASP.NET',
      description:"Microsoft tarafından geliştirilmiş web uygulamaları oluşturmak için kullanılan bir frameworktur."
    },
    {
      id: 13,
      image: "/img/teknoloji/csharp.png",
      title: 'C#',
      description:"Microsoft tarafından geliştirilen, çeşitli uygulamalar için kullanılan modern, nesne tabanlı bir programlama dilidir."
    },
    {
      id: 14,
      image: "/img/teknoloji/python.jpg",
      title: 'Python',
      description:"Kolay okunabilir ve geniş kullanım alanına sahip, yüksek seviyeli bir programlama dilidir."
    },
    {
      id: 15,
      image: "/img/teknoloji/Oracle-Logo.jpg",
      title: 'Oracle',
      description:"Güçlü ve güvenilir bir veritabanı yönetim sistemidir. Büyük ölçekli veritabanları için yaygın olarak kullanılır."
    },
    {
      id: 16,
      image: "/img/teknoloji/tailwind.png",
      title: 'Tailwind CSS',
      description:"Kullanıcı arayüzü tasarımında hız sağlayan yardımcı sınıflara dayalı bir CSS frameworkudur"
    },
    {
      id: 17,
      image: "/img/teknoloji/flutter-icon-2048x2048-ufx4idi8.png",
      title: 'Flutter',
      description:"Google tarafından geliştirilen, çapraz platform mobil uygulamalar oluşturmak için kullanılan bir UI frameworküdür."
    },
    {
      id: 18,
      image: "/img/teknoloji/docker.png",
      title: 'Docker',
      description:"Uygulamaların izole edilmiş ortamlarda çalıştırılmasını sağlayan bir konteyner platformudur."
    },
    {
      id: 19,
      image: "/img/teknoloji/Untitled.png",
      title: 'MongoDB',
      description:"NoSQL veri yapısına dayanan, büyük verileri depolamak ve yönetmek için kullanılan popüler bir veritabanıdır."
    },
    {
      id: 20,
      image: "/img/teknoloji/ruby-icon-1024x1024-u3yoql71.png",
      title: 'Ruby',
      description:"Dinamik, nesne yönelimli bir programlama dilidir ve özellikle web uygulamaları geliştirmede kullanılır."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };
  return (
    <>
          <Helmet>
        <title> Cyberkoc </title>
        <meta name="description" content="Cyberkoc, web tasarımı ve yazılım geliştirme alanında inovatif çözümler sunmaktadır. E-Ticaret, UI/UX, Mobil Yazılım ve daha fazlası." />
        <meta name="keywords" content="Web Tasarım, Yazılım Geliştirme, UI/UX, Mobil Uygulama, E-Ticaret, React, PHP, HTML" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      
      <main className="home-main">
        <div className="home-giris1">
         
        </div>
        <div className="home-giris2">
        
          <div className="container-swiper">
          <h1 className="swiperh1">NELER YAPIYORUZ </h1>
            <Swiper
  effect={'coverflow'}
  grabCursor={true}
  centeredSlides={true}
  loop={true}
  slidesPerView={'auto'}
  coverflowEffect={{
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  }}
  pagination={{ el: '.swiper-pagination', clickable: true }}
  navigation={{
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    clickable: true,
  }}
  breakpoints={{
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }}
  modules={[EffectCoverflow, Pagination, Navigation]}
  className="swiper_container"
>

  {yazilim.map((yz) => {
          const { image, id, title, link } = yz;
          return (
            <SwiperSlide>
            <Link to={link} className="text-decoration-none">
            <div key={id} className="content" style={{ backgroundImage: `url(${image})` }}>
                <h3 className='content-h3'>{title}</h3>
            
            </div>
            </Link>
            </SwiperSlide>
          
          );
        })}
 


  {/* Slider Kontrolleri */}
  <div className="slider-controler">
    <div className="swiper-button-prev slider-arrow">
      <ion-icon name="arrow-back-outline"></ion-icon>
    </div>
    <div className="swiper-button-next slider-arrow">
      <ion-icon name="arrow-forward-outline"></ion-icon>
    </div>
   
  </div>
</Swiper>

          </div>
        </div>

        <div className="home-giris3">

          {/* NASIL ÇALIŞIYORUZ? */}
      <div className="container nasil-cont">
        <h2 className='nasil-baslik'>NASIL YAPIYORUZ ?</h2>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className=" col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
              <div className=" border-0">
                <img className="nasil-img mb-5" src={step.img} alt={step.alt} loading="lazy" />
                <div className="card-body">
                  <h5 className="card-title fs-4 fw-bold text-secondary">{step.title}</h5>
                  <ul className="list-unstyled">
                    {step.content.map((item, i) => (
                      <li key={i} className="text-muted">
                        * {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

        </div>

        <div className="home-giris4">
        <div>

        <div>
  <h2 className='  fs-1 text-center wt-teknoloji text-light mb-5'>KULLANDIĞIMIZ TEKNOLOJİLER</h2>
</div>
<div className="web-teknoloji-container d-flex flex-column align-items-center justify-content-between gap-3 w-75 mx-auto">
  <Carousel activeIndex={activeIndex} onSelect={handleSelect} className="carousel-custom w-100" indicators={false}>
    {tekno.map((tech, index) => (
      <Carousel.Item key={tech.id} className="carousel-item-custom">
        <div className="carousel-image-container d-flex justify-content-center">
          <img
            className="carousel-image d-block mb-3"
            src={tech.image}
            alt={tech.title}
            style={{ height: '100px', objectFit: 'cover', maxWidth: '100%' }}
          />
        </div>
        <div className="carousel-card border-5 text-center mt-1">
          <h3 className="carousel-card-title">{tech.title}</h3>
          <p className="carousel-card-description">{tech.description}</p>
        </div>
      </Carousel.Item>
    ))}
  </Carousel>

  <div className="carousel-indicators-custom d-flex justify-content-center mt-3">
    {tekno.map((tech, index) => (
      <div
        key={tech.id}
        className={`indicator-image ${activeIndex === index ? 'active' : ''}`}
        style={{
          backgroundImage: `url(${tech.image})`,
          width: '50px',
          height: '50px',
          borderRadius: '50%',
          margin: '0 5px',
          backgroundSize: 'cover',
          cursor: 'pointer',
          border: activeIndex === index ? '2px solid #007bff' : 'none',
        }}
        onClick={() => handleSelect(index)}
      />
    ))}
  </div>
</div>






        </div>
        



        </div>
      </main>
    </>
  );
};

export default Home;



