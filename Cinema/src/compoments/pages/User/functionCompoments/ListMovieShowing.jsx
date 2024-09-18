function ListMovieUpcoming() {
  const movies = [
    {
      name: "PHIM SHIN CẬU BÉ BÚT CHÌ (LT) 2D: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH",
      category: "Hoạt hình, Gia đình, Phiêu lưu",
      duration: 105,
      country: "Nhật Bản",
      language: "Lồng Tiếng",
      image: "/src/styles/img/phim-shin.webp",
    },
    {
      name: "LÀM GIÀU VỚI MA",
      category: "Hài, Tâm lý",
      duration: 110,
      country: "Việt Nam",
      language: "VN",
      image: "/src/styles/img/philamgiauvoima.jpg",
    },
    {
      name: "PHIM SHIN CẬU BÉ BÚT CHÌ (LT) 2D: NHẬT KÝ KHỦNG LONG CỦA CHÚNG MÌNH",
      category: "Hoạt hình, Gia đình, Phiêu lưu",
      duration: 105,
      country: "Nhật Bản",
      language: "Lồng Tiếng",
      image: "/src/styles/img/phim-shin.webp",
    },
    {
      name: "LÀM GIÀU VỚI MA",
      category: "Hài, Tâm lý",
      duration: 110,
      country: "Việt Nam",
      language: "VN",
      image: "/src/styles/img/philamgiauvoima.jpg",
    },
    {
      name: "LÀM GIÀU VỚI MA",
      category: "Hài, Tâm lý",
      duration: 110,
      country: "Việt Nam",
      language: "VN",
      image: "/src/styles/img/philamgiauvoima.jpg",
    },
  ];

  const chunkArray = (array, chunkSize) => {
    let result = [];
    for (let i = 0; i < array.length; i += chunkSize) {
      result.push(array.slice(i, i + chunkSize));
    }
    return result;
  };

  const movieChunks = chunkArray(movies, 4);

  return (
    <div
      id="carouselExampleControls_Showing"
      className="carousel slide"
      data-bs-ride="carousel_Showing"
    >
      <div className="carousel-inner">
        {movieChunks.map((chunk, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="movie_list">
              {chunk.map((movie, movieIndex) => (
                <div className="movie_item" key={movieIndex}>
                  <img
                    className="movie_image"
                    src={movie.image}
                    alt={movie.name}
                  />
                  <div className="fu_movie">
                    <div className="name_movie">{movie.name}</div>
                    <div className="tral_movie">
                      <div className="div_play">
                        <div className="play_tm">
                          <i className="fa-solid fa-play"></i>
                        </div>
                        <div>Xem Trailer</div>
                      </div>
                      <div>
                        <button type="button" className="btn btn-warning">
                          Đặt vé ngay
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="function_movie">
                    <div>{movie.name}</div>
                    <div className="from_function_movie">
                      <i className="fa-solid fa-tag"></i> {movie.category}
                    </div>
                    <div className="from_function_movie">
                      <i className="fa-solid fa-clock"></i> {movie.duration}
                    </div>
                    <div className="from_function_movie">
                      <i className="fa-solid fa-earth-americas"></i>{" "}
                      {movie.country}
                    </div>
                    <div className="from_function_movie">
                      <i className="fa-solid fa-message"></i> {movie.language}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls_Showing"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls_Showing"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default ListMovieUpcoming;
