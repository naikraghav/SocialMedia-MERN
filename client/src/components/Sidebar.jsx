import React, { useState } from "react";
import metaImg from "../assets/meta.png"; 
import dashboardImg from  "../assets/dashboard.png";
import birthdayImg from "../assets/birthday.png";
import chatAIImg from "../assets/chatAI.png";
import messengerKidsImg from "../assets/messengerKids.png";
import gamingImg from "../assets/gamingvideo.png";
import recentActivityImg from "../assets/recent.png";
import ordersImg from "../assets/order.png";
import messengerImg from "../assets/messenger.png";
import spriteSheet from "../assets/icons-sprite.png";


const Sidebar = () => {
  const userAvatar = "https://via.placeholder.com/40"; // replace with real user image


  const sideItems = [
    { id: 2, name: "Meta AI", type: "image", src: metaImg },
    { id: 3, name: "Friends", type: "sprite", position: "0px -333px" },
    { id: 4, name: "Professional dashboard",type: "image", src: dashboardImg },
    { id: 5, name: "Feeds", type: "sprite", position: "0px -296px" },
    { id: 6, name: "Groups", type: "sprite", position: "0px -74px" },
    { id: 7, name: "Marketplace", type: "sprite", position: "0px -444px" },
    { id: 8, name: "Video", type: "sprite", position: "0px -555px" },
    { id: 9, name: "Memories", type: "sprite", position: "0px -481px" },
    { id: 10, name: "Saved", type: "sprite", position: "0px -222px" },
    { id: 11, name: "Birthdays", type: "image", src: birthdayImg },
    { id: 12, name: "Chat with AIs", type: "image", src: chatAIImg },
    { id: 13, name: "Events", type: "sprite", position: "0px -296px" },
    { id: 14, name: "Gaming Video", type: "image", src: gamingImg },
    { id: 15, name: "Messenger", type: "image", src: messengerImg },
    { id: 16, name: "Messenger Kids", type: "image", src: messengerKidsImg },
    { id: 17, name: "Orders and payments", type: "image", src: ordersImg },
    { id: 18, name: "Pages", type: "sprite", position: "0px -148px" },
    { id: 19, name: "Play games", type: "sprite", position: "0px -111px" },
    { id: 20, name: "Recent and activity", type: "image", src: recentActivityImg },
    { id: 21, name: "Reels",type: "sprite", position: "0px -37px" },
  ];

  const [showAll, setShowAll] = useState(false);

  return (
    <div className="w-full max-w-[360px] bg-gray-100 shadow-lg p-3 rounded-lg">
      <nav>
        <ul>
          {/* First item (dynamic user avatar) */}
          <li className="mb-1">
            <a
              href="#"
              className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors"
            >
              <img
                src={userAvatar}
                // alt="User Avatar"
                className="w-9 h-9 rounded-full mr-3 object-cover"
              />
              <span className="text-gray-800 text-base font-medium">
                Raghav Naik
              </span>
            </a>
          </li>

          {/* Other items from sprite sheet */}
          {(showAll ? sideItems : sideItems.slice(0, 9)).map((item) => (
            <li key={item.id} className="mb-1">
              <a
                href="#"
                className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors"
              >
                {/* Icon rendering based on type */}
                {item.type === "sprite" ? (
                  <div
                    className="w-9 h-9 rounded-full mr-3 bg-no-repeat"
                    style={{
                      backgroundImage: `url(${spriteSheet})`,
                      backgroundSize: "37px 592px", // sprite sheet size
                      backgroundPosition: item.position,
                    }}
                  />
                ) : (
                  <img
                    src={item.src}
                    className="w-9 h-9 rounded-full mr-3 object-cover"
                  />
                )}
                <span className="text-gray-800 text-base font-medium">
                  {item.name}
                </span>
              </a>
            </li>
          ))}

          {/* Toggle See more */}
          <li className="mb-1">
            <button
              onClick={() => setShowAll(!showAll)}
              className="flex items-center p-2 rounded-lg hover:bg-gray-200 transition-colors w-full text-left"
            >
              <div className="w-9 h-9 flex items-center justify-center bg-gray-200 rounded-full mr-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-5 w-5 text-gray-600 transform transition-transform ${
                    showAll ? "rotate-180" : ""
                  }`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <span className="text-gray-800 text-base font-medium">
                {showAll ? "See less" : "See more"}
              </span>
            </button>
          </li>
        </ul>
      </nav>

      <hr className="my-3 border-gray-300" />

      <h2 className="text-gray-600 font-semibold text-base px-2">
        Your shortcuts
      </h2>
    </div>
  );
};

export default Sidebar;
