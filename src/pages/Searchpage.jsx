import Search from "../component/section/Search";
import Sidebar from "../component/nav/Sidebar";
import { Link } from "react-router-dom";
import NavwithSearch from "../component/common/NavwithSearch";
import MiniFooter from "../component/nav/MiniFooter";
export default function Searchpage() {
  return (
    <div>
      <div className="flex justify-between ">
        <div className=" w-[50vw]sticky">
          <Sidebar />
        </div>
        <div className="">
          <NavwithSearch />
          <div>
            <div className="">
              <Search />
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
}
