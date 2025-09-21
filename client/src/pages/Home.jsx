import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";
import Sponsors from "../components/Sponsor";
import StoryBar from "../components/Storybar";

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <Navbar />
      <div className="flex   ">
        <div className="hidden lg:block mt-2">
          <Sidebar />
        </div>
        <div className="flex flex-col flex-1 max-w-3xl space-y-4 mt-4 ">
          <div className="w-full">
            <CreatePost />
          </div>
          <div className="w-full flex justify-center">
            <StoryBar />
          </div>

          {/* <Post /> */}
        </div>
        <div className="hidden md:block">{/* <Sponsors /> */}</div>
      </div>
    </div>
  );
};

export default Home;
