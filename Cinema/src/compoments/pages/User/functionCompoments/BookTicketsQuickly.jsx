function BookTicketsQuickly() {
  return (
    <>
      <div className="from_book_tickets">
        <div>
          <div className="dvn">ĐẶT VÉ NHANH</div>
        </div>
        <div className="from_add_bt">
          <form>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">1. CHỌN RẠP</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">2. CHỌN PHIM</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">3. CHỌN NGÀY</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <div>
              <select
                className="form-select"
                aria-label="Default select example"
              >
                <option selected="">4. CHỌN SUẤT</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
            <button type="button" className="btn btn-info">
              ĐẶT NGAY
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
export default BookTicketsQuickly;
