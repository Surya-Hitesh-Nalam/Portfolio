import { StarBackground } from "../components/StarBackground"
import { ThemeToogle } from "../components/ThemeToogle"

export const Home = ()=>{
    return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        {/*Theme Toogle */}
        
        <ThemeToogle/>

        {/* Background Effect */}

        <StarBackground />
        {/* Navbar */}


        {/* Main Content */}



        {/*Router */}
    </div>
}