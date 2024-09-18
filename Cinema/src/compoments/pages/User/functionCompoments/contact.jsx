function Contact() {
  return (
    <>
      <div className="contact_item">
        <div className="contact_item-banner">
          <div className="contact_item-banner-name">Liên hệ</div>
          <div className="contact_item-banner-img">
            <div className="img_item">
              <div className="img_item-img">
                <img src="./src/styles/img/ct-1.webp" alt="" />
              </div>
              <div className="img_item-name">
                <a href="">FACEBOOK</a>
              </div>
            </div>
            <div className="img_item_zalo">
              <div className="img_item-img-zalo">
                <img src="./src/styles/img/ct-2.webp" alt="" />
              </div>
              <div className="img_item-name-zalo">
                <a href="">ZALO CHAT</a>
              </div>
            </div>
          </div>
        </div>
        <div className="contact_item-form">
          <div className="contact-form-item">
            <div className="contact-form_name">THÔNG TIN LIÊN HỆ</div>
            <div className="form_contact">
              <div className="form_contact_item">
                <i className="fa-solid fa-envelope"></i>
                <div className="form_contact-item_content">
                  cinemasart.marketing@gmail.com
                </div>
              </div>
              <div className="form_contact_item">
                <i className="fa-solid fa-phone"></i>
                <div className="form_contact-item_content">039 6756 023</div>
              </div>
              <div className="form_contact_item">
                <i className="fa-solid fa-location-dot"></i>
                <div className="form_contact-item_content">
                  135 Tôn Đản, Đà Nẵng
                </div>
              </div>
            </div>
            <form>
              <div className="contact_item_input">
                <div>
                  <input type="text" placeholder="Họ và tên" />
                </div>
                <div>
                  <input type="text" placeholder="Điền email" />
                </div>
                <div>
                  <textarea
                    type="text"
                    placeholder="Thông tin liên hệ hoặc phản ánh"
                  />
                </div>
                <div>
                  <button type="button" className="contact_item-button">
                    GỬI NGAY
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
