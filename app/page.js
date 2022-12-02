import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

const Page = () => (
  <div className=" overflow-hidden sm:bg-gradient-to-r from-black via-purple-900 to-black bg-black">
    <Navbar />
    <Hero className />
    <div className="relative sm:bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black bg-black">
      <div >
        <About />
        {/* <div className="gradient-03 z-0"></div> */}
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        {/* <div className="gradient-04 z-0"></div> */}
        <WhatsNew />
      </div>



      <World />
      <div className="relative">
        <Insights />
        {/* <div className="gradient-04 z-0"></div> */}
        <Feedback />
      </div>
      <Footer />
    </div>



  </div>
);

export default Page;
