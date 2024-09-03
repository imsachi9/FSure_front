import TestimonialCard from "./TestimonialCard";
import PropTypes from "prop-types";

const Testimonials = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-start pt-[0rem] px-[0rem] pb-[4rem] box-border max-w-full text-center text-[1.25rem] text-[#eec044] font-['Covered_By_Your_Grace'] mq750:pb-[2.625rem] mq750:box-border ${className}`}
    >
      <div className="flex-1 overflow-hidden flex flex-row items-start justify-center pt-[4.875rem] pb-[5.193rem] pl-[0rem] pr-[0rem] box-border bg-[url('/public/sketch_house.png')] bg-contain bg-no-repeat bg-[top] max-w-full mq750:pt-[3.188rem] mq750:pb-[3.375rem] mq750:box-border">

        <div className="w-[70.125rem] rounded-[30px] bg-[#f2f2f2] flex flex-col items-center justify-center p-[3.187rem] box-border gap-[1.912rem] max-w-full lg:pl-[1.563rem] lg:pr-[1.563rem] lg:box-border mq450:pt-[2.063rem] mq450:pb-[2.063rem] mq450:box-border mq750:gap-[0.938rem]">
          <div className="w-[32.988rem] flex flex-col items-center justify-start gap-[0.425rem] max-w-full shrink-0">
            <h2 className="m-[0px] w-[8.5rem] h-[1.875rem] relative text-inherit leading-[1.5rem] font-normal font-[inherit] flex items-center whitespace-nowrap justify-center shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
              Client Testimonials
            </h2>
            <div className="self-stretch relative text-[1.913rem] leading-[2.313rem] font-semibold font-[Poppins] text-[#1a1a1a] mq450:text-[1.125rem] mq450:leading-[1.375rem] mq1050:text-[1.5rem] mq1050:leading-[1.813rem]">
              What our Client Says
            </div>
          </div>
          <div className="self-stretch flex flex-row items-start justify-start flex-wrap content-start gap-[1.275rem] max-w-full text-left text-[0.744rem] text-[#4d4d4d] font-[Poppins]">
            <TestimonialCard
              image="/farmer1.jpg"
              sMajumder="S. Majumder"
              star6="/star-6.svg"
              star7="/star-7.svg"
              star10="/star-10.svg"
            />
            <TestimonialCard
              propWidth="unset"
              image="/farmer2.jpeg"
              sMajumder="Poulami Das"
              propMinWidth="5.375rem"
              star6="/star-6.svg"
              star7="/star-7.svg"
              star10="/star-10.svg"
            />
            <TestimonialCard
              propWidth="8.925rem"
              image="/farmer3.jpeg"
              sMajumder="Nilanjana G. Basu"
              propMinWidth="7.563rem"
              star6="/star-6.svg"
              star7="/star-7.svg"
              star10="/star-10.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Testimonials.propTypes = {
  className: PropTypes.string,
};

export default Testimonials;
