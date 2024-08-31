import {
  Select,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  InputAdornment,
} from "@mui/material";
import SignUpForm from "../components/SignUpForm";
import Navbar from "../components/NavBar";
import Footer from "../components/Footer";

const SignUp = () => {
  return (
    <div className="w-full min-h-screen bg-grey-scale-white flex flex-col">
      <Navbar />
      <header className="w-full bg-[url('/public/title@3x.png')] bg-cover bg-no-repeat text-center text-gray-700 font-manrope py-8 mt-20">
        <div className="w-full max-w-screen-xl mx-auto text ">
          <div className="text-gray-700 uppercase font-semibold text-lg ">
            farmsure / AUTH
          </div>
          <div className="text-grey-scale-white text-4xl font-extrabold">
            SIGN UP
          </div>
        </div>
      </header>
      <main className="flex-grow flex items-center justify-center py-10">
        <div className="bg-floralwhite rounded-3xl w-full max-w-md p-8 shadow-lg">
          <SignUpForm />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SignUp;
