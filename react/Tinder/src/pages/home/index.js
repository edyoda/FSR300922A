import React from "react";
import AboutSection from "../../components/aboutSection";
import Footer from "../../components/footer";
import Header from "../../components/header";
import HeroBanner from "../../components/heroBanner";


const Home = ()=>{
    return(
        <div>
            <Header/>
            <HeroBanner/>
            <AboutSection/>
            <Footer/>
        </div>
    )
}
export default Home