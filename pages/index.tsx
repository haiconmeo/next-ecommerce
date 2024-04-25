import Layout from '../layouts/Main';
import PageIntro from '../components/page-intro';
import ProductsFeatured from '../components/products-featured';
import Footer from '../components/footer';
import Subscribe from '../components/subscribe';

const IndexPage = () => {
  return (
    <Layout>
      <PageIntro />

      {/* <section className="featured">
        <div className="container">
          <article style={{backgroundImage: 'url(/images/featured-1.jpg)'}} className="featured-item featured-item-large">
            <div className="featured-item__content">
              <h3>New arrivals are now in!</h3>
              <a href="#" className="btn btn--rounded">Show Collection</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-2.jpg)'}} className="featured-item featured-item-small-first">
            <div className="featured-item__content">
              <h3>Basic t-shirts $29,99</h3>
              <a href="#" className="btn btn--rounded">More details</a>
            </div>
          </article>
          
          <article style={{backgroundImage: 'url(/images/featured-3.jpg)'}} className="featured-item featured-item-small">
            <div className="featured-item__content">
              <h3>Sale this summer</h3>
              <a href="#" className="btn btn--rounded">VIEW ALL</a>
            </div>
          </article>
        </div>
      </section> */}

      <section className="section">
        <div className="container">
          <header className="section__intro">
            <h4>Tại sao bạn nên chọn chúng tôi?</h4>
          </header>

          <ul className="shop-data-items">
            <li>
              <i className="icon-shipping"></i>
              <div className="data-item__content">
                <h4>Giao Hàng Miễn Phí</h4>
                <p>Tất cả đơn hàng trên $199 đều được hưởng giao hàng miễn phí qua USPS First Class Mail.</p>
              </div>
            </li>

            <li>
              <i className="icon-payment"></i>
              <div className="data-item__content">
                <h4>Thanh Toán Dễ Dàng</h4>
                <p>Tất cả các khoản thanh toán được xử lý ngay lập tức qua một giao thức thanh toán an toàn.</p>
              </div>
            </li>

            <li>
              <i className="icon-cash"></i>
              <div className="data-item__content">
                <h4>Bảo Đảm Hoàn Tiền</h4>
                <p>Nếu một mặt hàng bị hỏng khi nhận hoặc bạn đã thay đổi ý kiến, bạn có thể gửi nó trở lại để nhận hoàn tiền đầy đủ.</p>
              </div>
            </li>

            <li>
              <i className="icon-materials"></i>
              <div className="data-item__content">
                <h4>Chất Lượng Tốt Nhất</h4>
                <p>Thiết kế để kéo dài, mỗi sản phẩm của chúng tôi đều được chế tạo từ những nguyên liệu tốt nhất.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>


      <ProductsFeatured />
      <Subscribe />
      <Footer />
    </Layout>
  )
}


export default IndexPage