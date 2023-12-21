import Playlist from "../component/section/Playlist";
import Sidebar from "../component/nav/Sidebar";
import Navbar from "../component/nav/Navbar";

export default function Playlistpage() {
  return (
    <div>
      <div className="flex justify-between ">
        <div>
          <Sidebar />
        </div>
        <div className="w-full">
          <div className="sticky top-0 z-50">
            <Navbar />
          </div>
          <div className="flex-col justify-start">
            <Playlist />
          </div>
        </div>
      </div>
    </div>
  );
}
