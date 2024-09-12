import BookTicketsQuickly from "./functionCompoments/BookTicketsQuickly";
import ListMovie from "./functionCompoments/ListMovie";
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
                  src="/src/styles/img/bay.webp"
                  alt="Third slide"
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
        <div>
          <BookTicketsQuickly />
        </div>
        <div>
          <ListMovie />
        </div>
      </div>
    </>
  );
}

export default PageHomeUser;
