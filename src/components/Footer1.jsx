import Button from "./Button";
import PropTypes from "prop-types";

const Footer1 = ({ className = "" }) => {
  return (
    <footer
      className={`absolute w-full top-[923px] right-[0px] left-[0px] h-[379px] bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat bg-[top] text-left text-2xs-7 text-gainsboro-100 font-outfit ${className}`}
    >
      <img
        className="absolute top-[calc(50%_-_33.6px)] left-[913px] w-[448px] h-56 overflow-hidden object-cover"
        alt=""
        src="/7png@2x.png"
      />
      <div className="absolute top-[0px] left-[calc(50%_-_440px)] w-[880px] h-[406.9px]">
        <div className="absolute top-[338px] left-[calc(50%_-_163px)] leading-[19.2px] text-lightgray text-center flex items-center w-[325px] h-[19px]">
          <span className="w-full">
            <span className="font-medium">{`© Copyright 2024. All Rights Reserved by `}</span>
            <span className="font-semibold">Team BinarySprouts ☘️✨</span>
          </span>
        </div>
        <section className="absolute w-[calc(100%_-_682px)] top-[80px] right-[682px] left-[0px] border-gray-800 border-r-[0.7px] border-solid box-border h-[182px] text-left text-2xs-7 text-gainsboro-100 font-outfit">
          <div className="absolute top-[48.7px] left-[0px] leading-[19.2px] font-medium flex items-center w-[199.4px] h-[57.6px]">
            Using the power of AI to optimize agricultural production, and
            assist farmers to increase their yield.
          </div>
          <div className="absolute h-[calc(100%_-_133.7px)] w-[calc(100%_-_81px)] top-[-0.2px] right-[71px] bottom-[133.9px] left-[10px]">
            <img
              className="absolute top-[calc(50%_-_24.15px)] left-[0px] w-[113.3px] h-[34.3px] overflow-hidden object-cover"
              alt=""
              src="/link--logo--logo2xwhite1webp1@2x.png"
            />
          </div>
          <Button
            buttonPosition="absolute"
            buttonTop="124px"
            buttonLeft="0px"
            sIGNIN="LOG IN"
          />
        </section>
        <div className="absolute top-[80px] left-[302.7px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[55.8px] h-[19.2px]">
          Explore
        </div>
        <div className="absolute top-[118.9px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[43.6px] h-[19.2px]">
          Home
        </div>
        <div className="absolute top-[146.1px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[73.5px] h-[19.2px]">
          About Sprout
        </div>
        <div className="absolute top-[173.3px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[66.6px] h-[19.2px]">
          Log In
        </div>
        <div className="absolute top-[200.5px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[39.4px] h-[19.2px]">
          Sign Up
        </div>
        <div className="absolute top-[227.7px] left-[302.7px] leading-[19.2px] font-medium flex items-center w-[52.5px] h-[19.2px]">
          Calendar
        </div>
        <div className="absolute top-[80px] left-[445px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[92.1px] h-[19.2px]">
          Milestones
        </div>
        <img
          className="absolute top-[calc(50%_-_84.25px)] left-[445px] rounded-[6.67px] w-[53.3px] h-[53.3px] overflow-hidden object-cover"
          alt=""
          src="/list--item--link--1jpg@2x.png"
        />
        <div className="absolute top-[119.2px] left-[511.7px] text-3xs leading-[18px] uppercase text-goldenrod-100 flex items-center w-[55.4px] h-[18px]">
          12 Sep, 2023
        </div>
        <div className="absolute top-[144px] left-[512px] text-xs leading-[12px] font-semibold flex items-center w-[121px] h-3">{`Successful launch of `}</div>
        <div className="absolute top-[154px] left-[512px] text-xs leading-[12px] font-semibold flex items-center w-[89px] h-[19px]">
          Sprout Website.
        </div>
        <img
          className="absolute top-[calc(50%_-_8.25px)] left-[445px] rounded-[6.67px] w-[53.3px] h-[53.3px] overflow-hidden object-cover"
          alt=""
          src="/list--item--link--2jpg@2x.png"
        />
        <div className="absolute top-[195.2px] left-[511.7px] text-3xs leading-[18px] uppercase text-goldenrod-100 flex items-center w-[55.9px] h-[18px]">
          18 Jul, 2023
        </div>
        <div className="absolute top-[219.5px] left-[511.7px] text-xs leading-[12px] font-semibold flex items-center w-[122.4px] h-3">
          Server Operations
        </div>
        <div className="absolute top-[237px] left-[512px] text-xs leading-[12px] font-semibold flex items-center w-[95.7px] h-3">
          Begin.
        </div>
        <div className="absolute top-[80px] left-[671px] text-base leading-[19.2px] font-semibold text-gray-100 flex items-center w-[90.3px] h-[19.2px]">
          Contact Info
        </div>
        <div className="absolute top-[119.2px] left-[671px] rounded-mini bg-gray-600 border-gray-500 border-[0.7px] border-dashed box-border w-[30px] h-[30px] text-center text-xs text-gray-100 font-font-awesome-5-pro">
          <div className="absolute top-[0.3px] left-[8.3px] leading-[30px] flex items-center justify-center w-[13.6px] h-[30px]">
            
          </div>
        </div>
        <div className="absolute top-[118.8px] left-[714.3px] text-3xs-3 leading-[16.8px] uppercase font-semibold text-gray-100 flex items-center w-[45.1px] h-[16.8px]">
          Address:
        </div>
        <div className="absolute top-[136px] left-[714px] leading-[19.2px] font-medium flex items-center w-[166px] h-[38px]">
          Heritage Institute of Technology, Anandapur, Kolkata
        </div>
        <div className="absolute top-[187.7px] left-[671px] rounded-mini bg-gray-600 border-gray-500 border-[0.7px] border-dashed box-border w-[30px] h-[30px] text-center text-xs text-gray-100 font-font-awesome-5-pro">
          <div className="absolute top-[0.3px] left-[9px] leading-[30px] flex items-center justify-center w-[12.1px] h-[30px]">
            
          </div>
        </div>
        <div className="absolute top-[187.3px] left-[714.3px] text-3xs-3 leading-[16.8px] uppercase font-semibold text-gray-100 flex items-center w-[30.8px] h-[16.8px]">
          Email:
        </div>
        <div className="absolute top-[204px] left-[714px] leading-[19.2px] font-medium flex items-center w-[207px] h-[19px]">
          soumyadeep.bose.ece26@heritageit.edu.in
        </div>
      </div>
    </footer>
  );
};

Footer1.propTypes = {
  className: PropTypes.string,
};

export default Footer1;
