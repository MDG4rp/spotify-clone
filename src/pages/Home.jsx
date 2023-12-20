import Sidebar from "../component/nav/Sidebar";

import Navbar from "../component/nav/Navbar";
import Footer from "../component/footer/Footer";
import MiniFooter from "../component/nav/MiniFooter";
import Homeplaylist from "../component/album/Homeplaylist";

export default function Home() {
  return (
    <div>
      <div className="flex justify-between">
        <Sidebar />
        <div className="flex-grow">
          <div className="sticky top-0 z-10 opacity-90"><Navbar/></div>
          <Homeplaylist />
        </div>
      </div>
      <MiniFooter/>
    </div>
  );
}
