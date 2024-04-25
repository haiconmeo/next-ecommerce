import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { EffectFade, Navigation } from 'swiper';

SwiperCore.use([EffectFade, Navigation]);

const PageIntro = () => {

  return (
    <section className="page-intro">
      <Swiper navigation effect="fade" className="swiper-wrapper">
        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('https://content-management-files.canva.com/cdn-cgi/image/f=auto,q=70/2fdbd7ab-f378-4c63-8b21-c944ad2633fd/header_t-shirts2.jpg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Ưu đãi mùa hè</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Xem Ngay</a>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="page-intro__slide" style={{ backgroundImage: "url('/images/aaaa.jpeg')" }}>
            <div className="container">
              <div className="page-intro__slide__content">
                <h2>Thiết kế chả giống ai</h2>
                <a href="#" className="btn-shop"><i className="icon-right"></i>Xem Ngay</a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="shop-data">
        <div className="container">
          <ul className="shop-data__items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Giao Hàng Miễn Phí</h4>
                <p>Cho đơn hàng từ 300k</p>
              </div>
            </li>

            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>99% Khách Hàng Hài Lòng</h4>
                <p>Ý kiến của khách hàng nói lên tất cả</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Bảo Đảm Chất Lượng</h4>
                <p>Bảo hành 30 ngày cho mỗi sản phẩm từ cửa hàng của chúng tôi</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

    </section>
  )
};

export default PageIntro