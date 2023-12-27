import CategoryPage from "../component/section/CategoryPage";
import Sidebar from "../component/nav/Sidebar";
import Navbar from "../component/nav/Navbar";
import MiniFooter from "../component/nav/MiniFooter";
export default function CategorySection() {
  return (
    <div>
      <div className="flex justify-between">
        <div className="">
          <Sidebar />
        </div>
        <div className="sticky top-0 z-50 flex-grow">
          <Navbar />
          <div className="flex-grow overflow-y-auto">
            <CategoryPage />
          </div>
        </div>
      </div>
    </div>
  );
}
