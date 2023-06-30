import { achievement } from "../assets";
import { SlGraduation } from "react-icons/sl";

const Achievement = () => {
  return (
    <div className="w-full bg-white py-20 flex flex-col-reverse justify-between items-center lg:px-10 md:flex-row ">
      <div className="flex flex-col justify-center px-3 md-px-0">
        <h1 className="md:leading-[72px] md:text-3xl text-3xl font-semibold">
          Our <span className="text-[#20B486]">Achievement</span>
        </h1>
        <p className="text-lg text-[#6D737A]">
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <div className="grid grid-cols-2 py-16">
          <div className="py-6 flex">
            <div className="p-4 bg-[#E9F8F3] rounded-xl">
              <SlGraduation size={30} style={{ color: "#1A906B" }} />
            </div>
            <div className="px-2 md:px-4">
              <h1 className="font-semibold text-xl">300</h1>
              <p className="text-[#6D737A]">Instructor</p>
            </div>
          </div>
          <div className="py-6 flex">
            <div className="p-4 bg-[#FFFAF5] rounded-xl">
              <SlGraduation size={30} style={{ color: "#FFC27A" }} />
            </div>
            <div className="px-2 md:px-4">
              <h1 className="font-semibold text-xl">10,000+</h1>
              <p className="text-[#6D737A]">Video</p>
            </div>
          </div>
          <div className="py-6 flex">
            <div className="p-4 bg-[#FFEEF0] rounded-xl">
              <SlGraduation size={30} style={{ color: "#ED4459" }} />
            </div>
            <div className="px-2 md:px-4">
              <h1 className="font-semibold text-xl">20,000+</h1>
              <p className="text-[#6D737A]">Student</p>
            </div>
          </div>
          <div className="py-6 flex">
            <div className="p-4 bg-[#F0F7FF] rounded-xl">
              <SlGraduation size={30} style={{ color: "#0075FD" }} />
            </div>
            <div className="px-2 md:px-4">
              <h1 className="font-semibold text-xl">1,000,000+</h1>
              <p className="text-[#6D737A]">Users</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img className="m-auto md:order-last order-first" src={achievement} />
      </div>
    </div>
  );
};

export default Achievement;
