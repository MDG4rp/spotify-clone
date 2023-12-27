import Search from "../component/section/Search";
import Sidebar from "../component/nav/Sidebar";
import { Link } from "react-router-dom";
import NavwithSearch from "../component/common/NavwithSearch";
import MiniFooter from "../component/nav/MiniFooter";
export default function Searchpage() {
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <Sidebar />
        </div>
        <div className="sticky top-0 z-50">
          <NavwithSearch />
          <div>
            <div className="">
              <Search />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
