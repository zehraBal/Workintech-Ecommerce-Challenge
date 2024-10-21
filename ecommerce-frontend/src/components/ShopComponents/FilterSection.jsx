import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../store/Actions/productActions";

export default function FilterSection() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);
  const total = useSelector((state) => state.product.total);
  const handleSortSelect = (e) => {
    const selectedSort = e.target.value;
    dispatch(setFilter({ sort: selectedSort }));
  };

  const handleFilterInput = (e) => {
    const searchValue = e.target.value;
    dispatch(setFilter({ search: searchValue }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, you can handle any submit logic here if needed
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[85%] flex justify-center items-center py-6 gap-20">
        <div className="w-full flex justify-between items-center">
          <span className="font-bold text-span leading-6 text-sec">
            Showing {total} results
          </span>
          <div>Views:</div>
          <div className="flex items-center gap-[15px]">
            <select
              className="contact-form-input font-bold text-sec"
              value={filter.sort || "price:desc"} // Controlled component for sort
              onChange={handleSortSelect}
            >
              <option value="price:desc">Price: Descending</option>
              <option value="price:asc">Price: Ascending</option>
              <option value="rating:desc">Rating: Descending</option>
              <option value="rating:asc">Rating: Ascending</option>
            </select>
            <form className="flex items-center gap-1" onSubmit={handleSubmit}>
              <input
                className="contact-form-input"
                placeholder="Search"
                value={filter.search || ""} // Controlled component for filter
                onChange={handleFilterInput} // Update filter state on change
              />
              <button
                type="submit"
                className="button-primary bg-blue text-white"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
