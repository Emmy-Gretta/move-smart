import Footer from "../components/Footers/Footer";
import Line from "../components/Headers/Hr";
import HeaderScene from "../scenes/Landing/HeaderScene";
import LearnMore from "../scenes/Landing/LearnMore";
import MomoScene from "../scenes/Landing/MomoScene";
import SmartScene from "../scenes/Landing/SmartScene";

const Landing = () => {
   return ( 
      <>
      <section>
         <HeaderScene />
         <Line />
         <SmartScene />
         <Line />
         <MomoScene />
         <LearnMore />
         <Footer />
      </section>
      </>
    );
}
 
export default Landing;