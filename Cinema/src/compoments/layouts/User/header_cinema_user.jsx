import { Outlet } from "react-router-dom";
import Footer from "./footer_cinema_user";

function HeaderCinemaUser() {
  return (
    <>
      <header>
        <div className="fh-user">
          <div className="fhu-top">
            <div className="fhut-left">
              <img src="/src/styles/img/image-removebg-preview.png" alt="" />
            </div>
            <div className="fhut-between">
              <button type="button" className="btn p-2 btn-outline-warning">
                <i className="fa-solid fa-ticket"></i>&ensp;ĐẶT VÉ NGAY
              </button>
              <button type="button" className="btn btn-outline-info">
                <i className="fa-solid fa-glass-water"></i>&ensp;ĐẶT BẮP NƯỚC
              </button>
            </div>
            <div className="fhut-right">
              <div className="f-search">
                <input
                  id="search-input"
                  type="search"
                  className=""
                  placeholder="Tìm phim, rạp"
                />
                <i className="fa-solid fa-magnifying-glass"></i>
              </div>
              <div className="f-login">
                <a href="">
                  <div className="fl-user">
                    <i className="fa-regular fa-user"></i>
                  </div>
                  Đăng nhập
                </a>
              </div>
              <div className="f-nn">
                <div className="fnn-vn">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAgVBMVEXaJR3//wDZEx7qlhTXAB7ZHR3ZGx3zxg7YCx7rmxT++wHqmBT99gT88Ab43Qr32Av21Az0yw3ywQ/iZRnwuBDurhLtqBLjcBjfUxr65wj76wfsoxPcPBzbLRz54QnpkBXnhRbmfxfleRfjbBjhXRreTRvzxA/wthHdRBvgWRrniRZlYMFKAAAEEElEQVR4nO3d63aiMBQFYBNPEG/Veqla71Zbp+//gIMiSCAIKF3Kyf7+dmYWnMmOMZyUWg0AAAAAAAAAAAAAAAAAAAAAAAAArpbPvoDXQw169iW8GrUQC/Xsi3gxsima8tkX8WJoJVYIj0YthRBLhCdK1r2a1BGeKHrzavKG8GjEybMv4qXI9bkma4TninrnmvQQnislfPjgCcnfS01+EZ4A9S816SM8ASkCGCcXchPWZIOi+Og9rMk7wuNzxZX77It5DXIbqckW4TmJRAfhuSARhZp4nJ1Wk53z7At6AdTQaoKt6lo8OgiPx5nEajJBeGgQq8kAAyUeHYSn5nwlavJle3jceHS88Ni+vqdWoiYty8PjDBMlEWJod3jckaEmI7vDQx1DTTpWh0ftDSURYm/z/r37Y6zJj83hMUbH7vCoqbEkQkwZhkfJXGicUpMx5fsHKlQ6NZnX81h3U2rSXef6+/NJhYoiTcuO8o0qtbijYXLNXrqvik3FUvX+uCI9Vb3HHlT/05K0KzZIfHRIm0If1zlUsiTel97EvmJZBlSp2VVDu+z7u8O2ooPEJ5er0isyW1ZvctUo+ii5JB9UoYVaCtqXuVRp7Sudm4Aj+9n3mlNfVndy1dG6pJKsWQwSn3v8LKEi3SOrvSZFj38rHDGYXHUUf1Ze1IRRbgKy9vZARd5qFV+UmClq3l2SObvcBGhq3pPO0pkyzE3AcRvZFUhouFwWJWa0ya5BzIbxIPHJxaxQRWYLlpOrTqU+wTAZs51cdTTMO9V2huxzE6C8M61FzbJudjUuWH3BucXZ5q7Jlven8JV2EOM2a45pJFti01lSE6fIZr4lxzTou0BNvu0YKEWiY0l4EgcxbrPimEbBB6ZWHNMwdJPfYkOnueEgxm0WHNMwdpPfYkGnecHo2BAe40EMfzyk/YD9MY2UbvLTNnTaBjb7TvOUbvIGOTUnZVuFe6d5ykGMS+MRbY0/ZX5Mwxida+ORXJo2sJmHxxSd6Da0cQO7yzo8hoMYrdg2tKkDm+MxjZCbGAV9J/74RjqJtqYx5/BQvIu4bopFoq2Jc3jUIXavKY1H7jFWuwPf8Ei9L3SQ+owv3tb0wff5KGldbbtbidA7sD/ZhkcdI7e5yuiG1juwj1zDI+fXm8xuPFIU/eNcw0PhIrXzL08Y6F+4wpsxDY9aBHf4nrPxyHHDJ4ZMXwgggxa/3/z/6WFbE9MXApA/aX4uiqxK3YX/WcXzhQDnX+vvfckt2HikyP8qzfKFALJ9urU7zr/Seae/zTE8p1/rf9/51/O5XJYvBPCi07y3YY+8McbwnUWy2Xrg/CsdWgw/eWT7oSNajuQ4oTx6SwxLAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwMx/np0p7vEdSWwAAAAASUVORK5CYII="
                    alt=""
                  />
                </div>
                <div>VN</div>
              </div>
            </div>
          </div>
          <div className="fhu-bot">
            <div className="fb-menu-left">
              <ul className="fuc">
                <li className="block-fcr menu_rap">
                  <i className="fa-solid fa-location-dot "></i> Chọn rạp
                  <ul className="f-crap" >
                    <li>
                      <a href="">CinemaStar Quốc Thanh</a>
                    </li>
                    <li>
                      <a href="">CinemaStar Mỹ Tho</a>
                    </li>
                    <li>
                      <a href="">CinemaStar Đà Nẵng</a>
                    </li>
                    <li>
                      <a href="">CinemaStar Đà Lạt </a>
                    </li>
                    <li>
                      <a href="">CinemaStar Hai Bà Trưng (Tp.HCM) </a>
                    </li>
                    <li>
                      <a href="">CinemaStar Hà Nội </a>
                    </li>
                    <li>
                      <a href="">CinemaStar Nha Trang </a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="">
                    <i className="fa-solid fa-calendar"></i> Lịch chiếu
                  </a>
                </li>
              </ul>
              <div className="fb-menu-right">
                <ul>
                  <li>
                    <a href="">Khuyến mãi</a>
                  </li>
                  <li>
                    <a href="">Thuê sự kiện</a>
                  </li>
                  <li>
                    <a href="">Tất cả các giải trí</a>
                  </li>
                  <li>
                    <a href="Introduce">Giới thiệu</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default HeaderCinemaUser;
