import { AboutMe } from "../components/AboutMe"
import { ContactSection } from "../components/ContactSection"
import EducationSection from "../components/EducationSection"
import { Footer } from "../components/Footer"
import { HeroSection } from "../components/HeroSection"
import { Navbar } from "../components/Navbar"
import { ProjectSection } from "../components/ProjectsSection"
import { SkillsSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToogle } from "../components/ThemeToogle"

export const Home = ()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toogle */}
        
        <ThemeToogle/>

        {/* Background Effect */}

        <StarBackground />
        {/* Navbar */}

        <Navbar />

        {/* Main Content */}
        <main>
            <HeroSection />
            <AboutMe />
            <EducationSection/>
            <SkillsSection/>
            <ProjectSection />
            <ContactSection />
            
        </main>

        {/*Footer */}
        <Footer />
    </div>
}