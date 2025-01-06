import React from "react";
import digi from "../assets/dijital.webp";
import ok from "../assets/right-arrow.png";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

const DigitalTransformation = () => {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const solutions = [
    {
      title: "Bulut Teknolojileri",
      description: [
        "Veri Depolama ve Erişim: Merkezi sistemde güvenli veri erişimi.",
        "Hızlı Ölçeklenebilirlik: Talep değişikliklerine hızlı yanıt.",
        "Bulut Tabanlı Uygulamalar: CRM ve muhasebe gibi SaaS çözümleri.",
        "Veri Yedekleme: Felaket durumlarına karşı güvenli veri yedekleme.",
        "Sanal Sunucular: Kullanıcı taleplerine göre dinamik sunucu altyapısı.",
        "Bulut Güvenliği: Bulut ortamlarında yüksek güvenlik standartları.",
      ],
    },
    {
      title: "İş Süreçlerinin Otomasyonu",
      description: [
        "RPA: Tekrarlayan görevlerin otomasyonu.",
        "ERP Sistemleri: İş süreçlerinin entegre yönetimi.",
        "Otomatik Raporlama: Gerçek zamanlı süreç izleme.",
        "İnsan Kaynakları Yönetimi: Personel işlemlerinin otomatikleştirilmesi.",
        "Faturalama ve Ödemeler: Finansal süreçlerin otomasyonu.",
        "Dijital İmzalar: Evrak onayı süreçlerinin dijitalleştirilmesi.",
      ],
    },
    {
      title: "Büyük Veri ve Veri Analitiği",
      description: [
        "Veri Toplama: IoT ve sosyal medyadan veri toplama.",
        "Tahminsel Analitik: Gelecekteki trendlerin öngörüsü.",
        "KPI Takibi: Performans göstergelerinin izlenmesi.",
        "Veri Madenciliği: Karmaşık veri kümelerinden değerli bilgiler çıkarma.",
        "Gerçek Zamanlı Veri İzleme: Anlık verilerle karar destek sistemi.",
        "Veri Görselleştirme: Karmaşık verilerin anlaşılır grafiklerle sunulması.",
      ],
    },
    {
      title: "Yapay Zeka ve Makine Öğrenimi",
      description: [
        "Chatbotlar: 7/24 müşteri hizmeti sağlama.",
        "Otomatik Karar Verme: Hızlı ve doğru operasyonel kararlar.",
        "Görüntü ve Ses Tanıma: Sektörel gelişmiş çözümler.",
        "Doğal Dil İşleme: İnsan dilini anlama ve işleme.",
        "Öğrenen Algoritmalar: Verilere dayalı sürekli gelişen sistemler.",
        "Yapay Zeka ile İleri Düzey Analitik: Derinlemesine veri analizleri ve tahminler.",
      ],
    },
    {
      title: "Siber Güvenlik Çözümleri",
      description: [
        "Güvenlik Duvarları ve Şifreleme: Hassas veri koruma.",
        "Tehdit İzleme: Siber saldırıları tespit ve müdahale.",
        "Çalışan Farkındalığı: Güvenlik açıklarını önleme.",
        "Sosyal Mühendislik Saldırılarına Karşı Savunma: İnsan odaklı saldırılara karşı eğitim ve stratejiler.",
        "Zararlı Yazılım Koruması: Bilgisayar sistemlerine zarar veren yazılımların tespiti.",
        "Kimlik Doğrulama ve Erişim Yönetimi: Güvenli kullanıcı erişimi sağlama.",
      ],
    },
    {
      title: "Müşteri Deneyimi Yönetimi",
      description: [
        "Omnichannel Deneyim: Tüm kanallarda tutarlı müşteri deneyimi.",
        "Kişiselleştirme: AI ile özel hizmetler.",
        "Geri Bildirim Sistemleri: Süreçlerin iyileştirilmesi.",
        "Müşteri Sadakat Programları: Uzun vadeli müşteri ilişkileri oluşturma.",
        "Müşteri Analitiği: Davranışsal verileri kullanarak müşteri ihtiyaçlarını anlama.",
        "Proaktif Müşteri Destek: Müşteri sorunları ortaya çıkmadan önce çözüm önerileri.",
      ],
    },
    {
      title: "Blok Zinciri Teknolojileri",
      description: [
        "Akıllı Sözleşmeler: Otomatik işleyen anlaşmalar.",
        "Tedarik Zinciri Yönetimi: Hareket takibi ve sahtecilik önleme.",
        "Kripto Para Çözümleri: Hızlı ve düşük maliyetli ödemeler.",
        "Blok Zinciri Güvenliği: Verilerin güvenliğini sağlamak için şifreleme teknikleri.",
        "Yatırım ve Dijital Varlıklar: Dijital varlıkların güvenli şekilde saklanması.",
        "Merkeziyetsiz Uygulamalar (DApps): Merkezi olmayan ağlarda çalışan uygulamalar.",
      ],
    },
    {
      title: "AR/VR Teknolojileri",
      description: [
        "Eğitim ve Simülasyon: Süreç öğrenimini kolaylaştırma.",
        "Sanal Mağazalar: Ürünlerin sanal ortamda deneyimi.",
        "İnşaat ve Mühendislik: 3D modellerle görselleştirme.",
        "Tıbbi Eğitim: VR ile hastalar ve tedavi süreçlerinin simülasyonu.",
        "Sanal Turizm: Gezi deneyimlerinin sanal olarak sunulması.",
        "Sanat ve Tasarım: Yaratıcı projelerin artırılmış gerçeklik ile geliştirilmesi.",
      ],
    },
  ];

  return (
    <Container>
      <Helmet>
        <title>Dijital Dönüşüm Çözümleri | CyberKoc Teknolojileri</title>
        <meta
          name="description"
          content="Bulut teknolojileri, yapay zeka, büyük veri, siber güvenlik ve daha fazlasıyla işletmenizi dijital dönüşüm sürecine hazırlayın."
        />
        <meta
          name="keywords"
          content="dijital dönüşüm, bulut teknolojileri, yapay zeka, büyük veri, siber güvenlik, iş süreçleri, blok zinciri, AR/VR teknolojileri"
        />
        <meta
          property="og:title"
          content="Dijital Dönüşüm Çözümleri | CyberKoc Teknolojileri"
        />
        <meta
          property="og:description"
          content="Bulut teknolojileri, yapay zeka, büyük veri, siber güvenlik ve daha fazlasıyla işletmenizi dijital dönüşüm sürecine hazırlayın."
        />
        <meta property="og:image" content={digi} />
        <meta
          property="og:url"
          content="https://www.cyberkoc.com/dijital-donusum"
        />
        <meta
          name="twitter:title"
          content="Dijital Dönüşüm Çözümleri | CyberKoc Teknolojileri"
        />
        <meta
          name="twitter:description"
          content="Bulut teknolojileri, yapay zeka, büyük veri, siber güvenlik ve daha fazlasıyla işletmenizi dijital dönüşüm sürecine hazırlayın."
        />
        <meta name="twitter:image" content={digi} />
      </Helmet>

      <div className="card mt-5 mb-5 border-0">
        <div className="row mb-5 dijital-gris g-0">
          <div className="col-md-12 col-lg-8">
            <img
              src={digi}
              className="digi-img img-fluid rounded"
              alt="Dijital Dönüşüm"
            />
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="card-body">
              <h1 className="card-title digi-baslik">
                Dijital Dönüşüm Çözümleri: İşletmenizi Geleceğe Taşıyan
                Teknolojiler
              </h1>
              <p className="card-text digi-par">
                Bulut teknolojileri, yapay zeka, büyük veri, siber güvenlik ve
                daha fazlasıyla işletmenizi dijital dönüşüm sürecine hazırlayın.
                Verimliliği artıran modern çözümlerle rekabette öne geçin. Bu
                başlık ve açıklama, hem arama motorları için optimize edilmiş
                hem de kullanıcıların ilgisini çekecek şekilde hazırlanmıştır.
              </p>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-center fw-bold text-secondary">HİZMETLERİMİZ</h2>

      <Row className="row py-5 mt-4">
        {solutions.map((solution, index) => (
          <div className="col-md-12 col-lg-6 d-flex mb-4" key={index}>
            <div className="digi-kart card h-100">
              <div className="digi-kart-baslik text-center font-weight-bold">
                {solution.title}
              </div>
              <div className="digi-kart-cerceve card-body">
                <ul className="digi-kart-liste">
                  {solution.description.map((item, idx) => (
                    <li className="list-group-item" key={idx}>
                      <img src={ok} alt="ok" className="ok" /> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </Row>

      <Row className="text-center m-5">
        <Col>
          <h3 style={{ color: "#142e70" }}>
            Şirketinizin ihtiyaçlarına özel dijital dönüşüm çözümleri için
            teklif almak ister misiniz?
          </h3>
          <Link to="/Teklif" onClick={scrollToTop}>
            <Button
              style={{
                color: "aliceblue",
                backgroundColor: "#142e70",
                borderRadius: "25px",
              }}
              size="lg"
            >
              Teklif Al
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default DigitalTransformation;


    

