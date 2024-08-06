import pic1 from "../../public/pic1.jpg";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import HeroSection from "../components/heroSection";
import { AboutTheApp } from "../components/info";
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