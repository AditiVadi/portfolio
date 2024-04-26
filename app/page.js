import Image from "next/image";
import HeroSection from "./comp/HeroSection";
import { Container } from "postcss";
import Navbar from "./comp/Navbar";
import AboutSection from "./comp/AboutSection";
import ProjectsSection from "./comp/ProjectsSection";
import EmailSection from "./comp/EmailSection";
import Footer from "./comp/Footer";
import AchievementsSection from "./comp/AchievementSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <Navbar/>
    <div className='container mt-24 mx-auto px-12 py-4'>
    <HeroSection/>
    {/*<AchievementsSection/> */}
    <AboutSection/>
    <ProjectsSection/>
    <EmailSection/>
   
    </div>
    <Footer/>
    </main>
  );
}
