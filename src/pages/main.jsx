import { Header } from "../components/header";
import pic1 from "../../public/pic1.jpg"
import HeroSection from "../components/heroSection";
import { AboutTheApp } from "../components/info";
import { Footer } from "../components/footer";
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