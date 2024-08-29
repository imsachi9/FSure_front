import { useMemo } from "react";
import PropTypes from "prop-types";

const Button = ({
  className = "",
  buttonPosition,
  buttonTop,
  buttonLeft,
  sIGNIN,
}) => {
  const buttonStyle = useMemo(() => {
    return {
      position: buttonPosition,
      top: buttonTop,
      left: buttonLeft,
    };
  }, [buttonPosition, buttonTop, buttonLeft]);

  return (
    <button
      className={`cursor-pointer border-grey-scale-grey-4 border-[0.9px] border-solid py-2 px-[13.8px] bg-grey-scale-white absolute top-[124px] left-[0px] rounded-[17.24px] box-border w-[181px] flex flex-row items-center justify-center ${className}`}
      style={buttonStyle}
    >
      <div className="flex-1 relative text-xs tracking-[0.34px] leading-[150%] font-outfit text-grey-scale-grey-4 text-center">
        {sIGNIN}
      </div>
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  sIGNIN: PropTypes.string,

  /** Style props */
  buttonPosition: PropTypes.any,
  buttonTop: PropTypes.any,
  buttonLeft: PropTypes.any,
};

export default Button;
