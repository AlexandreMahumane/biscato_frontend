import pic1 from "../../public/pic1.jpg";
import { Footer } from "../components/Footer/index";
import { Header } from "../components/Header";
import HeroSection from "../components/heroSection/index";
import { AboutTheApp } from "../components/info/index";
export const Main = () =>{
    return(
        <div className="sm:p-2">
            <Header/>
            <HeroSection/>
            <AboutTheApp/>
            <Footer/>


            
        </div>
    );
}