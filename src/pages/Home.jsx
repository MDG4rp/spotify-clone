import Sidebar from "../component/nav/Sidebar";

import Navbar from "../component/nav/Navbar";
import Footer from "../component/footer/Footer";
import MiniFooter from "../component/nav/MiniFooter";
import Homeplaylist from "../component/album/Homeplaylist";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between ">
        <div className=" top-0 sticky">
          <Sidebar />
        </div>
        <div className="">
          <Navbar />
          <div>
            <div className="">
              <Homeplaylist />
            </div>
          </div>
        </div>
      </div>
      <MiniFooter />
    </div>
  );
}
