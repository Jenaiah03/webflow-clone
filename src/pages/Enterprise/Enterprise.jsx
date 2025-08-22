import BackedPage from "../../Components/EnterpriseComp/BackedPage/BackedPage";
import Footer from "../../Components/EnterpriseComp/Footer/Footer";
import HeroSection from "../../Components/EnterpriseComp/HeroSection/HeroSection";
import Navbar from "../../Components/EnterpriseComp/Navbar/Navbar";
import ScalePage from "../../Components/EnterpriseComp/ScalePage/ScalePage";
import Transform from "../../Components/EnterpriseComp/Transform/Transform";
import WeblowflowSection from "../../Components/EnterpriseComp/WebflowSection/WeblowflowSection";





function Enterprise() {
    return (
        <div className='enterprise'>
            <div className="navControl">
                <Navbar/>
            </div>

            <div className="heroGuard">
            <HeroSection/>
            </div>
            

            <div className="transformCenter">
            <Transform/>
            </div>

            <div className="scalepage-Control">
            <ScalePage/>
            </div>

            <div className="webflow-Control">
            <WeblowflowSection/>
            </div>


            <div className="backedpage-Control">
            <BackedPage/>
            </div>

            <div className="footer-Control">
            <Footer/>
            </div>
            {/* Continue below with other sections */}
        </div>
    );
}
export default Enterprise;