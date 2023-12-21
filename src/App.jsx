import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Searchpage from "./pages/Searchpage";
import Playlist from "./component/section/Playlist";
import Albums from "./component/section/Albums";
import Albumpage from "./pages/albumpage";
import Playlistpage from "./pages/Playlistpage";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import Errorpage from "./pages/Errorpage";
import Help from "./pages/Help";
import NavwithSearch from "./component/common/NavwithSearch";
import CategorySection from "./pages/CategorySection";
import DetailsPage from "./component/section/DetailsPage"; // Import DetailsPage

function App() {
  return (
    <div className="bg-black">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Errorpage />} />
          <Route path="help" element={<Help />} />
          <Route path="/searchpage" element={<Searchpage />} />
          <Route path="/playlist" element={<Playlist />} />
          <Route path="/album" element={<Albums />} />
          <Route path="/albumpage" element={<Albumpage />} />
          <Route path="/playlistPage" element={<Playlistpage />} />
          <Route path="/signuppage" element={<Signuppage />} />
          <Route path="/loginpage" element={<Loginpage />} />
          
          <Route
            path="/CategoryPage/:categoryName"
            element={<CategorySection />}
          />
          <Route path="/details/:id" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
