import { FaUserCircle } from "react-icons/fa";
import { FaVideo, FaImage, FaFilm } from "react-icons/fa";
import liveVideoIcon from "../assets/liveVideo.png";
import photoVideoIcon from "../assets/photosVideo.png";
import reelIcon from "../assets/reels.png";


export default function CreatePost() {
  return (
    <div className="bg-white rounded-xl shadow-md w-full max-w-[590px] mx-auto p-3">


      {/* Input section */}
      <div className="flex items-center gap-3">
        {/* User avatar */}
        <FaUserCircle className="text-gray-400 " size={40} />

        {/* Input field */}
        <button className="flex-1 text-left bg-gray-100 text-gray-600 rounded-full py-2 px-4 hover:bg-gray-200 focus:outline-none">
          What's on your mind, Raghav?
        </button>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-200 my-2"></div>

      {/* Bottom actions */}
      <div className="flex justify-between items-center text-sm text-gray-600">
        <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-md hover:bg-gray-100">
          <img src={liveVideoIcon} alt="Live video"  />
          <span className="font-semibold text-gray-500">Live video</span>
        </button>
        <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-md hover:bg-gray-100">
          <img src={photoVideoIcon} alt="Photo/video"  />
          <span className="font-semibold text-gray-500">Photo/video</span>
        </button>
        <button className="flex items-center gap-2 flex-1 justify-center py-2 rounded-md hover:bg-gray-100">
          <img src={reelIcon} alt="Reel" />
          <span className="font-semibold text-gray-500">Reel</span>
        </button>
      </div>
    </div>
  );
}
