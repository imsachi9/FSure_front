import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Icon,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";

const FAQs = ({ className = "" }) => {
  return (
    <div
      className={`w-full flex flex-row items-center justify-center py-8 px-4 box-border text-left text-lg text-[#eec044] font-['Covered_By_Your_Grace'] ${className}`}
      style={{
        backgroundImage: "url('/sketch_house.png')",
        backgroundPosition: "center bottom",
        backgroundSize: "cover", // You can use 'contain' or 'cover' depending on your needs
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-row items-center justify-center gap-12 max-w-7xl w-full px-4">
        {/* FAQs Section */}
        <div className="w-full max-w-md flex flex-col gap-3 mb-10">
          <div className="text-left mb-6">
            <h2 className="text-base font-normal leading-6 text-[#eec044]">
              Frequently Asked Questions
            </h2>
            <h1 className="text-3xl font-semibold font-[Poppins] text-[#1a1a1a]">
              Let’s Talk About FarmSure and You!
            </h1>
          </div>
          <Accordion
            className="!m-0"
            sx={{
              borderRadius: "10px",
              border: "1px solid #66bb6a",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography className="tracking-wide">
                1. What is FarmSure?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                FarmSure is a platform that connects farmers directly with
                potential buyers, aiming to ensure stable income for farmers
                through blockchain-based smart contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion
            className="!m-0"
            sx={{
              borderRadius: "10px",
              border: "1px solid #66bb6a",
              "&:before": {
                display: "none",
              },
            }}
          >
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>2. How does FarmSure work?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                FarmSure allows farmers to create and manage contracts with
                buyers. These contracts are secured by blockchain technology,
                ensuring transparency and security.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="!m-0"
          sx={{
              borderRadius: "10px",
              border: "1px solid #66bb6a",
              "&:before": {
                display: "none",
              },
            }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>3. What are the benefits for farmers?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Farmers benefit from direct access to buyers, stable income, and
                secure transactions through smart contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="!m-0"
          sx={{
              borderRadius: "10px",
              border: "1px solid #66bb6a",
              "&:before": {
                display: "none",
              },
            }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>4. How can I sign up for FarmSure?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                You can sign up by visiting our website and filling out the
                registration form. Once verified, you can start creating
                contracts.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className="!m-0"
          sx={{
              borderRadius: "10px",
              border: "1px solid #66bb6a",
              "&:before": {
                display: "none",
              },
            }}>
            <AccordionSummary expandIcon={<Icon>expand_more</Icon>}>
              <Typography>5. Is FarmSure free to use?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                FarmSure offers free and premium plans. The free plan allows
                basic access, while the premium plan provides additional
                features for a fee.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
        {/* Image Section */}
        <div className="flex-shrink-0 ml-3">
          <img
            className="h-auto w-full max-w-lg object-cover"
            alt="Farmer"
            src="/farmer4.png"
          />
        </div>
      </div>
    </div>
  );
};

FAQs.propTypes = {
  className: PropTypes.string,
};

export default FAQs;
