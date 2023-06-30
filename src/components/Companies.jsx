import {
  companyLogo1,
  companyLogo2,
  companyLogo3,
  companyLogo4,
} from "../assets";

const Companies = () => {
  return (
    <div className="w-full bg-white px-2 pb-24">
      <div className="flex flex-col m-auto justify-center items-center">
        <h1 className="text-[#536E96] font-bold md:text-[24px] text-center text-[20px]">
          Trusted by over 25,000 teams around the world.
        </h1>
        <p className="text-[#536E96] md:text-[20px] text-[15px] py-2 text-center">
          Leading companies all use the same courses to help employees keep
          their skills fresh.
        </p>
        <div className="flex flex-row flex-wrap gap-8 py-[12px]">
          <div >
            <img className="w-full" src={companyLogo1} alt="" />
          </div>
          <div>
            <img className="w-full" src={companyLogo2} alt="" />
          </div>
          <div>
            <img className="w-full" src={companyLogo3} alt="" />
          </div>
          <div>
            <img className="w-full" src={companyLogo4} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Companies;
