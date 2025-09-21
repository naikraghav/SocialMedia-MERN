import { FiPlus } from "react-icons/fi";

const StoryBar = () => {
  // Dummy stories for demo
  const stories = [
    { id: 1, img: "https://via.placeholder.com/112x200", name: "Story 1" },
    { id: 2, img: "https://via.placeholder.com/112x200", name: "Story 2" },
    { id: 3, img: "https://via.placeholder.com/112x200", name: "Story 3" },
    { id: 4, img: "https://via.placeholder.com/112x200", name: "Story 4" },
    { id: 5, img: "https://via.placeholder.com/112x200", name: "Story 5" },
  ];

  return (
    <div className="flex space-x-3 overflow-x-scroll py-2 max-w-[590px] scrollbar-hide">
      {/* First Story: Create Story */}
      <div className="flex flex-shrink-0 w-28 h-48 bg-gray-200 rounded-xl relative cursor-pointer hover:scale-105 transform transition justify-center">
        <div className="w-full h-[143px] bg-amber-100">
          <img
            src="https://via.placeholder.com/112x200" // Replace with user's profile pic
            alt="Your Story"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="absolute bottom-8  bg-blue-600 rounded-full  shadow w-9 h-9 border-4 border-white flex items-center justify-center">
          <FiPlus className="text-white text-2xl" />
        </div>
        <span className="absolute bottom-2  text-xs font-semibold text-black ">
          Create Story
        </span>
      </div>

      {/* Remaining stories mapped */}
      {stories.map((story, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-28 h-48 bg-gray-200 rounded-xl relative cursor-pointer hover:scale-105 transform transition"
        >
          <img
            src={story.image}
            // alt={story.name}
            className="w-full h-full object-cover rounded-xl"
          />
          <img
            src={story.profilePic}
            // alt={story.name}
            className="absolute top-2 left-2 w-8 h-8 rounded-full border-2 border-blue-500"
          />
          <span className="absolute bottom-2 left-2 text-xs font-semibold text-white">
            {story.name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StoryBar;
