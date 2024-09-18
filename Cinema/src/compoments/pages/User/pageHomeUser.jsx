import BookTicketsQuickly from "./functionCompoments/BookTicketsQuickly";
import Contact from "./functionCompoments/contact";
import ListKm from "./functionCompoments/ListKm";
import ListMovieShowing from "./functionCompoments/ListMovieShowing";
import ListMovieUpcoming from "./functionCompoments/ListMovieUpcoming";
function PageHomeUser() {
  return (
    <>
      <div className="Home_user">
        <div className="from_slide">
          <div id="carouselExample" className="carousel slide">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/src/styles/img/CinemaStart.jpeg"
                  alt="First slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/src/styles/img/lam-giau-voi-ma-2048_1723108931285.jpg"
                  alt="Second slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/src/styles/img/ma-da-2048_1723799769236.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/src/styles/img/hai-muoi-web-banner.webp"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/src/styles/img/shin.jpg"
                  alt="Third slide"
                />
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100 "
                  src="/src/styles/img/snapedit_1724591568732.jpeg"
                  alt="Third slide"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carouselExample"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="div_datve">
          <BookTicketsQuickly />
        </div>
        <div className="div_phimdanchieu">
          <div className="ContentName">
            <h1>PHIM ĐANG CHIẾU</h1>
          </div>
          <ListMovieShowing />
          <div className="button_xemthem">
            <a href="">XEM THÊM</a>
          </div>
        </div>
        <div className="div_phimdanchieu">
          <div className="ContentName">
            <h1>PHIM SẮP CHIẾU</h1>
          </div>
          <ListMovieUpcoming />
          <div className="button_xemthem">
            <a href="">XEM THÊM</a>
          </div>
        </div>
        <div className="container">
          <div className="ctn_km">
            <h1>KHUYẾN MÃI</h1>
          </div>
          <ListKm />
          <div className="button_xemthem">
            <a href="">TẤT CẢ ƯU ĐÃI</a>
          </div>
        </div>
        <div className="div_contact">
        <Contact />
        </div>

      </div>
    </>
  );
}

export default PageHomeUser;
