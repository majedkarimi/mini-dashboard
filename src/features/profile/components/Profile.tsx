import Image from "next/image";

const Profile = () => (
  <div className="flex flex-col items-center mb-12">
    <div className="w-24 h-24 justify-center items-center rounded-full bg-gradient-to-br from-cyan-300 to-cyan-400 mb-3  relative">
      <Image
        src="/profile.jpeg"
        alt="Profile"
        width={100}
        height={100}
        className="w-full h-full object-cover rounded-[100%]"
      />
      <div className="w-12 h-6 bg-white rounded-full flex items-center justify-center mb-3 absolute bottom-[-16px] left-[24px] z-10 shadow">
        <span className="text-orange-600 text-xs font-medium z-10">🟠 2m</span>
      </div>
    </div>

    <h3 className="font-semibold text-gray-800 text-lg">ماجد کریمی</h3>
    <p className="text-gray-500 text-sm">majedkarimi@gmail.com</p>
  </div>
);
export default Profile;
