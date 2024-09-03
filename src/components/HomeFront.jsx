import PropTypes from "prop-types";

const HomeFront = ({ className }) => {
  return (
    <div
      className={`relative w-full h-[82vh] bg-cover bg-center flex flex-col items-start justify-center text-white ${className}`}
      style={{
        backgroundImage: `url('/farmer_bg.png')`,
        margin: 0,
        padding: 0,
      }}
    >
      <div className="relative z-10 max-w-[57.644rem] mx-auto px-4 text-center mq450:px-2">
        <h1 className="text-[1.5rem] font-bold uppercase mb-4 tracking-wider">
          Welcome to FARMSURE
        </h1>
        <h2 className="text-[4rem] leading-tight font-['Covered_By_Your_Grace'] mq450:text-[2.5rem] mq450:leading-snug">
          Contract based selling for farmers
        </h2>
        <p className="max-w-[29.875rem] mx-auto mt-6 text-[1rem] leading-relaxed font-semibold text-[rgba(255,255,255,0.85)] mq450:text-[0.875rem]">
          FarmSure is an AI powered platform for farmers and buyers to buy and
          sell produce in bulk and negotiate prices through Blockchain based
          smart contracts and secure payments.
        </p>
        <div className="mt-8 flex justify-center items-center gap-4">
          <button className="bg-[#4baf47] hover:bg-[#30962e] text-white font-medium py-2 px-6 rounded-full text-[0.875rem]">
            Learn More
          </button>
          <img
            className="w-[3rem] h-[3rem] object-contain"
            src="/leaf.png"
            alt="Leaf Icon"
          />
        </div>
      </div>
      <img
        className="absolute top-[14rem] right-[32rem] w-[3rem] h-[3rem] object-contain z-20"
        src="/leaf2.png"
        alt="Leaf Decoration"
      />
    </div>
  );
};

HomeFront.propTypes = {
  className: PropTypes.string,
};

export default HomeFront;
