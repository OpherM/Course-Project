import { heroImg } from "../assets";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="w-full bg-white py-8 md:py-24 px-1 sm:px-6 flex flex-col-reverse md:flex-row justify-between items-center">
      <div className="flex flex-col justify-start sm:gap-4 sm:w-4/5 w-[90%] md:w-[70%] ">
        <p className="py-2 text-xl sm:text-2xl text-[#20B486] font-medium">
          START TO SUCCESS
        </p>
        <h1 className="md:leading-[72px] py-2 md:text-5xl text-2xl font-semibold">
          Access To <span className="text-[#20B486]">5000+</span> Courses from{" "}
          <span className="text-[#20B486]">300</span> Instructors & Institutions
        </h1>
        <p className="py-2 text-lg text-gray-600">
          Various versions have evolved over the years, sometimes by accident.
        </p>
        <form className="max-w-[580px] flex justify-between p-4 input-box-shadow bg-white border rounded-md">
          <input
            className="bg-white w-full focus:outline-none"
            type="text"
            placeholder="What do you want to learn?"
          />
          <button>
            <AiOutlineSearch
              size={20}
              className="icon"
              style={{ color: "#000" }}
            />
          </button>
        </form>
      </div>
      <div>
        <img className="md:order-last order-first" src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default Hero;
