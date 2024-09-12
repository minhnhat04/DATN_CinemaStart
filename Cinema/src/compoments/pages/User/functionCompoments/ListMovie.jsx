function ListMovie() {
  return (
    <>
      <div>
        <div className="ContentName">Phim Đang Chiếu</div>
        <div className="movie_list">
          <div className="movie_item">
            <img
              className="movie_image"
              src="/src/styles/img/phim-shin.webp"
              alt="Movie 1"
            />
            <div className="function_movie">
              <div>
                PHIM SHIN CẬU BÉ BÚT CHÌ (LT) 2D: NHẬT KÝ KHỦNG LONG CỦA CHÚNG
                MÌNH{" "}
              </div>
              <div className="from_function_movie">
                <i className="fa-solid fa-tag"></i> Hoạt hình, Gia đình, Phiêu
                lưu
              </div>
              <div className="from_function_movie">
                <i className="fa-solid fa-clock"></i> 105
              </div>
              <div className="from_function_movie">
                <i className="fa-solid fa-earth-americas"></i> Nhật Bản
              </div>
              <div className="from_function_movie">
                <i className="fa-solid fa-message"></i> Lồng Tiếng
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ListMovie;
