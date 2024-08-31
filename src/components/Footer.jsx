import { useMemo } from "react";
import PropTypes from "prop-types";

const Footer = ({
  className = "",
  footerTop,
  buttonPosition,
  buttonTop,
  buttonLeft,
  sIGNIN,
}) => {
  const footerStyle = useMemo(() => {
    return {
      top: footerTop,
    };
  }, [footerTop]);

  return (
    <footer
      className={`relative w-full bg-[url('/public/footer@3x.png')] bg-cover bg-no-repeat text-left text-[0.669rem] text-gainsboro font-outfit ${className}`}
      style={footerStyle}
    >
      <div className="container mx-auto w-full">
        <div className="flex flex-wrap justify-between mt-10">
          <div className="flex flex-col items-start pl-16 space-y-4 w-full md:w-1/4">
            <div className="flex gap-4">
              <img
                className="w-16 h-16"
                alt=""
                src="/link--logo--logo2xwhite1webp@2x.png"
              />
              <div className="">
                <h2 className="text-white  py-0 my-0 mt-4">FarmSure</h2>
                <div className="text-white my-0 py-0">
                  an agri-tech initiative
                </div>
              </div>
            </div>

            <p className="text-white">
              Using cutting-edge tech to provide farmers a marketplace where
              they are in control of their crops.
            </p>
          </div>
          <div className="flex flex-col items-center space-y-1 w-full md:w-1/4">
            <h2 className="text-lg  text-gray-100 my-0 ">Explore</h2>
            <div className="text-white ">Home</div>
            <p className="text-white ">MarketPlace</p>
            <p className="text-white ">Profile</p>
            <p className="text-white ">About Us</p>
            <a className="text-white " href="/faqs">
              FAQs
            </a>
          </div>
          <div className="flex flex-col items-center space-y-1 w-full md:w-1/4">
            <h2 className="text-lg my-0 text-gray-100">Milestones</h2>
            <img className="w-48" alt="" src="/frame-6.svg" />
            <img className="w-48" alt="" src="/frame-8.svg" />
          </div>
          <div className="items-center space-y-3 w-full md:w-1/4">
            <h2 className="text-lg my-0 text-center text-gray-100">
              Contact Info
            </h2>
            <div className="flex items-center space-x-2">
              <img className="w-8 h-8" alt="" src="/list--item.svg" />
              <div>
                <div className="text-yellow-500  uppercase">Address:</div>
                <div className="text-white">
                  Heritage Institute of Technology, Anandapur, Kolkata
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img className="w-8 h-8" alt="" src="/list--item1.svg" />
              <div>
                <div className="text-yellow-500 uppercase">Email:</div>
                <div className="text-white">
                  <a
                    href="mailto:sachin.kumar.cse26@heritageit.edu.in"
                    className="text-white hover:text-blue-300 underline"
                  >
                    sachin.kumar.cse26@heritageit.edu.in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center text-lightgray leading-6 my-5 mt-7">
          <span>
            <span className="font-semibold text-xl">{`© Copyright 2024. All Rights Reserved by `}</span>
            <span className="font-semibold">Team FarmSure ☘️✨</span>
          </span>
        </div>
      </div>
    </footer>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
  buttonPosition: PropTypes.string,
  buttonTop: PropTypes.string,
  buttonLeft: PropTypes.string,
  sIGNIN: PropTypes.string,

  /** Style props */
  footerTop: PropTypes.any,
};

export default Footer;
