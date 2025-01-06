import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
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

  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <>
      <Helmet>
        <title>Cyberkoc - Web Tasarımı ve Yazılım Geliştirme</title>
        <meta name="description" content="Cyberkoc, web tasarımı ve yazılım geliştirme alanında inovatif çözümler sunmaktadır. E-Ticaret, UI/UX, Mobil Yazılım ve daha fazlası." />
        <meta name="keywords" content="Web Tasarım, Yazılım Geliştirme, UI/UX, Mobil Uygulama, E-Ticaret, React, PHP, HTML" />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <main className="home-main">
        <section className="home-giris1">
          {/* Add any header content here */}
        </section>

        <section className="home-giris2">
          <div className="container-swiper">
            <h1 className="swiperh1">NELER YAPIYORUZ</h1>
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
                  <SwiperSlide key={id}>
                    <Link to={link} className="text-decoration-none">
                      <div className="content" style={{ backgroundImage: `url(${image})` }}>
                        <h3 className='content-h3'>{title}</h3>
                      </div>
                    </Link>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            <div className="slider-controler">
              <div className="swiper-button-prev slider-arrow">
                <ion-icon name="arrow-back-outline"></ion-icon>
              </div>
              <div className="swiper-button-next slider-arrow">
                <ion-icon name="arrow-forward-outline"></ion-icon>
              </div>
            </div>
          </div>
        </section>

        <section className="home-giris3">
          <div className="container nasil-cont">
            <h2 className='nasil-baslik'>NASIL YAPIYORUZ?</h2>
            <div className="row">
              {steps.map((step, index) => (
                <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-2 mb-4 d-flex justify-content-center">
                  <div className="border-0">
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
        </section>
      </main>
    </>
  );
};

export default Home;



