// import Search from "../components/Search";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";
import Video from "../components/Video";
import FAQs from "../components/FAQs";

const Home = () => {
  return (
    <div className="w-full relative bg-[#fff] flex flex-col items-end justify-start pt-[0.062rem] px-[0rem] pb-[0rem] box-border gap-[0.062rem] leading-[normal] tracking-[normal]">
      <NavBar />
      <section className="self-stretch h-[73.313rem] relative max-w-full mq450:h-auto mq450:min-h-[1173]">
        <Features />
      </section>
      <section className="self-stretch h-[73.313rem] relative max-w-full mq450:h-auto mq450:min-h-[1173]">
        <Testimonials />
      </section>
      <section className="self-stretch h-[73.313rem] relative max-w-full mq450:h-auto mq450:min-h-[1173]">
        <Video />
      </section>
      <section className="self-stretch h-[73.313rem] relative max-w-full mq450:h-auto mq450:min-h-[1173]">
        <FAQs />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
