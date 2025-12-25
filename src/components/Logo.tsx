import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-2 ">
      <Image
        src="/icons/logo.png"
        alt=""
        width={100}
        height={100}
        className="w-[40px]"
      />
      <span className="text-xl font-bold text-gray-800">قصابی</span>
    </div>
  );
};

export default Logo;
