import Profile from "@/features/profile/components/Profile";
import Navigation from "./Navigation/Navigation";

const Sidebar = () => {
  return (
    <div className="w-64 bg-white p-6 flex flex-col justify-center items-center relative">
      <Profile />
      <Navigation />
      <div className="line"></div>
    </div>
  );
};

export default Sidebar;
