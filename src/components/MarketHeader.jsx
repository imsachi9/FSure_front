import PropTypes from "prop-types";

const MarketHeader = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start pt-[4.687rem] px-[9.187rem] pb-[4.631rem] box-border gap-[1.712rem] bg-[url('/public/market_bg.png')] bg-cover bg-no-repeat bg-[top] max-w-full mt-[-0.019rem] text-left text-[2.144rem] text-[#fff] font-[Manrope] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq750:pl-[4.563rem] mq750:pr-[4.563rem] mq750:box-border ${className}`}
    >
      <div className="w-[22.725rem] flex flex-col items-start justify-start gap-[0.643rem] max-w-full">
        <b className="self-stretch relative tracking-[0.03em] leading-[120%] mq450:text-[1.313rem] mq450:leading-[1.563rem] mq1050:text-[1.688rem] mq1050:leading-[2.063rem]">
          Marketplace
        </b>
        <div className="self-stretch relative text-[0.75rem] tracking-[0.03em] leading-[100%] uppercase font-medium">
          Seal contracts, Sell produce
        </div>
      </div>
      <div className="w-[21.063rem] flex flex-row items-end justify-start max-w-full">
        <div className="flex-1 rounded-[30.67px] bg-[#fff] border-[#e6e6e6] border-[0.7px] border-solid box-border flex flex-row items-start justify-start py-[0.5rem] px-[1rem] max-w-full">
          <input
            className="w-[16.669rem] [border:none] [outline:none] font-[Poppins] text-[1rem] bg-[transparent] h-[1rem] relative leading-[150%] text-[#808080] text-left inline-block p-[0px]"
            placeholder="search for something..."
            type="text"
          />
        </div>
        <div
          className="rounded-[28.67px] bg-[#00b307] flex flex-row items-center justify-center py-[0.668rem] px-[1.625rem] z-[1] ml-[-3.644rem] transition-transform duration-300 transform hover:scale-105 cursor-pointer"
          onClick={() => {
            // Implement your search functionality here
            console.log("Search button clicked");
          }}
        >
          <img
            className="h-[0.875rem] w-[0.875rem] relative object-cover"
            alt="Search Icon"
            src="/search.png"
          />
        </div>
      </div>
    </div>
  );
};

MarketHeader.propTypes = {
  className: PropTypes.string,
};

export default MarketHeader;
