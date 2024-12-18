import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { setFilter } from "../../store/Actions/productActions";

export default function FilterSection() {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.product.filter);
  const total = useSelector((state) => state.product.total);

  const [searchValue, setSearchValue] = useState(filter.search || "");

  const handleSortSelect = (e) => {
    const selectedSort = e.target.value;
    dispatch(setFilter({ sort: selectedSort }));
  };

  const handleSearchInputChange = (e) => {
    setSearchValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setFilter({ search: searchValue }));
  };

  return (
    <section className="w-full flex justify-center items-center">
      <div className="w-[85%] flex justify-center items-center py-6 gap-20">
        <div className="w-full flex justify-between items-center sm:flex-col flex-wrap sm:justify-center sm:gap-5">
          <span className="font-bold text-span leading-6 text-sec">
            Showing {total} results
          </span>
          <div className="flex items-center gap-[15px] sm:flex-col">
            <select
              className="contact-form-input font-bold text-sec"
              value={filter.sort || "price:desc"}
              onChange={handleSortSelect}
            >
              <option value="price:desc">Price: Descending</option>
              <option value="price:asc">Price: Ascending</option>
              <option value="rating:desc">Rating: Descending</option>
              <option value="rating:asc">Rating: Ascending</option>
            </select>
            <form
              className="flex items-center gap-1 sm:justify-center"
              onSubmit={handleSubmit}
            >
              <input
                className="contact-form-input"
                placeholder="Search"
                value={searchValue}
                onChange={handleSearchInputChange}
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
