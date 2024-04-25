import Layout from '../../layouts/Main';
import { useSelector } from 'react-redux';
import CheckoutStatus from '../../components/checkout-status';
import CheckoutItems from '../../components/checkout/items';
import { RootState } from 'store';
import { useState } from 'react';

const CheckoutPage = () => {
  // const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    email: '',
    address: '',
    fullName: '',
    city: '',
    phone: '',
    paymentMethod: 'COD',
  });

  const priceTotal = useSelector((state: RootState) => {
    const cartItems = state.cart.cartItems;
    let totalPrice = 0;
    if(cartItems.length > 0) {
      cartItems.map(item => totalPrice += item.price * item.count);
    }

    return totalPrice;
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setUserInfo({ ...userInfo, [event.target.name]: event.target.value });
  };

  const handleCreateCart = async () => {
    try {
      // const response = await axios.post('/api/cart', {
      //   items: state.cart.cartItems,
      //   userInfo,
      // });
      // navigate('/payment');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout>
      <section className="cart">
        <div className="container">
          <div className="cart__intro">
            <h3 className="cart__title">Vận chuyển và thanh toán</h3>
            <CheckoutStatus step="checkout" />
          </div>

          <div className="checkout-content">
            <div className="checkout__col-6">
              <div className="checkout__btns">
                <button className="btn btn--rounded btn--yellow">Log in</button>
                <button className="btn btn--rounded btn--border">Sign up</button>
              </div>

              <div className="block">
                <h3 className="block__title">Thông tin giao hàng</h3>
                <form className="form">
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        name="email"
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Email"
                        value={userInfo.email}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form__col">
                      <input
                        name="address"
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="địa chỉ"
                        value={userInfo.address}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        name="fullName"
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Họ và tên"
                        value={userInfo.fullName}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form__col">
                      <input
                        name="city"
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Tỉnh/Thành phố"
                        value={userInfo.city}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  
                  <div className="form__input-row form__input-row--two">
                    <div className="form__col">
                      <input
                        name="phone"
                        className="form__input form__input--sm"
                        type="text"
                        placeholder="Số điện thoại"
                        value={userInfo.phone}
                        onChange={handleInputChange}
                      />
                    </div>

                    <div className="form__col">
                      <div className="select-wrapper select-form">
                        <select
                          name="paymentMethod"
                          value={userInfo.paymentMethod}
                          onChange={handleInputChange}
                        >
                          <option>Phương Thức thanh toán</option>
                          <option value="COD">Thanh toán sau khi nhận hàng</option>
                          <option value="bank">Chuyển khoản</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            
            <div className="checkout__col-4">              
              <div className="block">
                <h3 className="block__title">Đơn vị vận chuyển</h3>
                <ul className="round-options round-options--two">
                  <li className="round-item round-item--bg">
                    <img src="https://printub.com/images/homes/ghtk.png" alt="Paypal" />
                  </li>
                  <li className="round-item round-item--bg">
                    <img src="https://printub.com/images/homes/ghn.png" alt="Paypal" />
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="checkout__col-2">
              <div className="block">
                <h3 className="block__title">Giỏ hàng của bạn</h3>
                <CheckoutItems />
                
                <div className="checkout-total">
                  <p>tổng cộng</p>
                  <h3>{priceTotal}đ</h3>
                </div>
              </div>
            </div>
          </div>
          
          <div className="cart-actions cart-actions--checkout">
            <a href="/cart" className="cart__btn-back"><i className="icon-left"></i> Back</a>
            <div className="cart-actions__items-wrapper">
              <button type="button" className="btn btn--rounded btn--border">Tiếp tục mua sắm</button>
              <button type="button" className="btn btn--rounded btn--yellow" onClick={handleCreateCart}>Thanh toán</button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CheckoutPage;