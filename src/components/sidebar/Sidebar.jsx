import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sm:w-16 w-full bg-white sm:h-full h-16  fixed sm:top-16 bottom-0 left-0 z-20">
      <ul className="flex sm:flex-col w-full h-full flex-row items-center sm:justify-start justify-evenly sm:mt-10 sm:space-y-5">
        <li>
          <Link to={"/"} className="flex items-center justify-center w-10 h-10">
            <i class="ri-book-open-fill ri-lg text-secondary"></i>
          </Link>
        </li>
        <li>
          <Link to={"/namoz" } className="flex items-center justify-center w-10 h-10">
            <i class="ri-user-smile-line ri-lg text-secondary "></i>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
