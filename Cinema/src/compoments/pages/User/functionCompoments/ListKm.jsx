function ListKm() {
  return (
    <>
      <div>
        <div
          id="carouselExampleControls_km"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="listKm">
                <div className="kmItem">
                  <img
                    src="/src/styles/img/km-m-1.webp"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="kmItem">
                  <img
                    src="/src/styles/img/km-m-2.webp"
                    className="d-block"
                    alt="..."
                  />
                </div>
                <div className="kmItem">
                  <img
                    src="/src/styles/img/km-m-3.webp"
                    className="d-block"
                    alt="..."
                  />
                </div>
              </div>
            </div>

            <div className="carousel-item">
            <div className="listKm">
              <div className="kmItem">
                <img
                  src="/src/styles/img/monday_1_.webp"
                  className="d-block"
                  alt="..."
                />
              </div>
            </div>
          </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls_km"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls_km"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
export default ListKm;
