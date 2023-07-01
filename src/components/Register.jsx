import { cta } from "../assets";

const Register = () => {
  return (
    <div className="w-full bg-[#E9F8F3B2] py-14 gap-20 flex flex-col items-center lg:px-10 px-5 md:flex-row ">
      <div>
        <img className=" mx-auto" src={cta} alt="" />
      </div>

      <div className="pt-5">
        <h1 className="md:text-3xl text-3xl font-semibold ">
          Join <span className="text-[#20B486]">World's largest</span> learning{" "}
          <br /> platform today
        </h1>
        <p className="text-lg mt-4 text-gray-600">
          Start learning by registering for free
        </p>
        <button className="my-4 bg-[#20B486] px-8 py-3.5 rounded-md text-white font-bold max-[780px]:w-full">
          Sign Up for Free
        </button>
      </div>
    </div>
  );
};

export default Register;
