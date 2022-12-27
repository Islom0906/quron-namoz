import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center  w-full bg-white fixed top-0 left-0 z-10 space-x-5">
      <div className="bg-primary h-16 w-16 flex items-center justify-center">
        <Link to={'/'}>
        <i class="ri-book-open-line ri-xl text-white"></i>
        </Link>
      </div>
      <form className="flex items-center py-5  pr-7">
        <i class="ri-search-line ri-lg text-primary"></i>
        <input
          type="text"
          placeholder="Search here for"
          className="outline-none border-0 ml-5 text-primary w-full"
        />
      </form>
    </div>
  );
};

export default Navbar;
