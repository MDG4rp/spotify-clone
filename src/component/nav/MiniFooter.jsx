import LanguageModal from "../modal/LanguageModal.jsx";
export default function MiniFooter(){
    return(
        <div
        className="w-[435px] ml-2 fixed bottom-0 text-white p-10 text-sm rounded-2xl"
        style={{ backgroundColor: "rgba(18,18,18,255)" }}
      >
        <div className="first-line flex opacity-70 gap-6 p-2">
          <p>Legal</p>
          <p>Privacy Center</p>
          <p>Privacy Policy</p>
        </div>
        <div className="second-line flex opacity-70 gap-6 p-2">
          <p>Cookie Settings</p>
          <p>About Ads</p>
          <p>Accessibility</p>
        </div>
        <p className="opacity-70 p-2">Cookies</p>
        <LanguageModal />
      </div>
    )
}