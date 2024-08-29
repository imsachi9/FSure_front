import Button from "./Button";
import PropTypes from "prop-types";

const Footer = ({ className = "" }) => {
  return (
    <footer
      className={`absolute w-full top-[896px] right-[0px] left-[0px] h-[379px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-2xs-7 text-gainsboro-100 font-outfit ${className}`}
    >
      <img
        className="absolute top-[calc(50%_-_33.6px)] left-[832px] w-[448px] h-56 overflow-hidden object-cover"
        alt=""
        src="/7png@2x.png"
      />
      <div className="absolute top-[0px] left-[calc(50%_-_440px)] w-[880px] h-[406.9px]">
        <div className="absolute top-[338px] left-[calc(50%_-_163px)] leading-[19.2px] text-lightgray text-center flex items-center w-[325px] h-[19px]">
          <span className="w-full">
            <span className="font-medium">{`© Copyright 2024. All Rights Reserved by `}</span>
            <span className="font-semibold">Team FarmSure ☘️✨</span>
          </span>
        </div>
        <div className="absolute w-[calc(100%_-_618.7px)] top-[80px] right-[610.7px] left-[8px] border-gray-800 border-r-[0.7px] border-solid box-border h-[181.6px]">
          <div className="absolute top-[48.7px] left-[0px] leading-[19.2px] font-medium flex items-center w-[199.4px] h-[57.6px]">
            Using cutting-edge tech to provide farmers a marketplace where they
            are in control of their crops.
          </div>
          <div className="absolute h-[calc(100%_-_133.3px)] w-[calc(100%_-_81.3px)] top-[-0.2px] right-[71.3px] bottom-[133.5px] left-[10px]" />
          <img
            className="absolute top-[calc(50%_-_105.8px)] left-[0px] w-[54px] h-[54px] overflow-hidden object-cover"
            alt=""
            src="/link--logo--logo2xwhite1webp@2x.png"
          />
          <Button sIGNIN="create account" />
        </div>
        <div className="absolute top-[80px] left-[302.7px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[55.8px] h-[19.2px]">
          Explore
        </div>
        <div className="absolute top-[118.9px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[43.6px] h-[19.2px]">
          Home
        </div>
        <div className="absolute top-[143.1px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[73.5px] h-[19.2px]">
          MarketPlace
        </div>
        <div className="absolute top-[167.3px] left-[303px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
          Profile
        </div>
        <div className="absolute top-[215.7px] left-[303px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
          About Us
        </div>
        <div className="absolute top-[191.5px] left-[303px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
          FAQs
        </div>
        <div className="absolute top-[80px] left-[445px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[92.1px] h-[19.2px]">
          Milestones
        </div>
        <img
          className="absolute top-[114px] left-[445px] w-[194px] h-[53.3px]"
          alt=""
          src="/frame-6.svg"
        />
        <img
          className="absolute top-[182px] left-[445px] w-[189px] h-[53.3px]"
          alt=""
          src="/frame-8.svg"
        />
        <div className="absolute top-[80px] left-[671px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[90.3px] h-[19.2px]">
          Contact Info
        </div>
        <img
          className="absolute top-[119.2px] left-[671px] rounded-mini w-[30px] h-[30px]"
          alt=""
          src="/list--item.svg"
        />
        <div className="absolute top-[118.8px] left-[714.3px] text-3xs-3 leading-[16.8px] uppercase font-semibold text-gray-100 flex items-center w-[45.1px] h-[16.8px]">
          Address:
        </div>
        <div className="absolute top-[136px] left-[714px] leading-[19.2px] font-medium flex items-center w-[166px] h-[38px]">
          Heritage Institute of Technology, Anandapur, Kolkata
        </div>
        <img
          className="absolute top-[187.7px] left-[671px] rounded-mini w-[30px] h-[30px]"
          alt=""
          src="/list--item1.svg"
        />
        <div className="absolute top-[187.3px] left-[714.3px] text-3xs-3 leading-[16.8px] uppercase font-semibold text-gray-100 flex items-center w-[30.8px] h-[16.8px]">
          Email:
        </div>
        <div className="absolute top-[204px] left-[714px] leading-[19.2px] font-medium flex items-center w-[207px] h-[19px]">
          sachin.kumar.cse26@heritageit.edu.in
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
