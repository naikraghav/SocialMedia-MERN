import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import CreatePost from "../components/CreatePost";

const Home = () => {
  return (
    <div className=" bg-gray-100">
      <Navbar />
      <div className="flex gap-6 mt-6 px-4 items-start">
        <Sidebar />
        <CreatePost />
      </div>
    </div>
  );
};

export default Home;
