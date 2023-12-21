import "./Footer.css";

export default function Footer() {
  return (
    <footer className="text-white p-8 mt-8">
  <div className="flex justify-between flex-wrap">
    <div className="menu flex gap-20 text-2xl flex-wrap mb-10">
      <div className="">
        <h1>Company</h1>
        <p>About</p>
        <p>Jobs</p>
        <p>For the Record</p>
      </div>

      <div className="">
        <h1>Communities</h1>
        <p>For Artists</p>
        <p>Advertsing</p>
        <p>Investors</p>
        <p>Vendors</p>
      </div>

      <div className="">
        <h1>Useful links</h1>
        <p>Support</p>
        <p>Free Mobile App</p>
        <p>Consumer rights</p>
      </div>
    </div>

    {/* social media buttons */}
    <div className="flex justify-center items-center gap-5 flex-wrap">
      <button className="rounded-full h-fit w-fit">
        <a href="https://www.instagram.com/spotify/" target="_blank">
          <img
            src="src/assets/9dfb494f082c73dfea8b9dce9950aa31-removebg-preview.png"
            alt="instagram"
            className="h-8"
          />
        </a>
      </button>
      <button className="rounded-full h-fit w-fit">
        <a href="https://twitter.com/Spotify" target="_blank">
          <img src="src/assets/x.png" alt="X" className="h-8" />
        </a>
      </button>
      <button className="rounded-full h-fit w-fit">
        <a href="https://www.facebook.com/Spotify/" target="_blank">
          <img
            src="src/assets/fblogo.png"
            alt="facebook"
            className="h-[35px]"
          />
        </a>
      </button>
    </div>
  </div>
  <hr className="my-14 opacity-20" />

  <div className="copyright text-center md:text-left h-fit">
    © 2023 Copyright: Spotify-Clone
  </div>
</footer>

  );
}
