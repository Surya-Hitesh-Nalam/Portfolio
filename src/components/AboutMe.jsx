import { Briefcase, Code, User } from "lucide-react"

export const AboutMe = () => {
    return (
        <section id="about" className="py-24 px-4 relative">
            <style>{`
                .glass-card {
                    background: rgba(30, 30, 46, 0.5);
                    backdrop-filter: blur(10px);
                    border: 1px solid rgba(139, 92, 246, 0.3);
                    border-radius: 16px;
                    transition: all 0.3s ease;
                }

                .glass-card:hover {
                    background: rgba(30, 30, 46, 0.7);
                    border-color: rgba(139, 92, 246, 0.5);
                    transform: translateY(-4px);
                    box-shadow: 0 8px 32px rgba(139, 92, 246, 0.2);
                }
            `}</style>

            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    About <span className="text-primary">Me</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold">Passionate Web Developer & AI Developer</h3>
                        <p className="text-muted-foreground">I'm Surya Hitesh, a full-stack developer specializing in building modern web applications using the MERN stack</p>
                        <p className="text-gray-300">I enjoy solving real-world problems, exploring new challenges, and continuously sharpening my problem-solving skills</p>

                        <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
                            <a href="" className="cosmic-button text-center">Resume</a>
                            <a href="#contact" className="px-6 py-3 rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500/10 transition-all duration-300 text-center">Get In Touch</a>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-6">
                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-purple-500/10">
                                    <Code className="h-6 w-6 text-purple-400"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">Web Development</h4>
                                    <p className="text-gray-400">Creating responsive and functional web apps</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-purple-500/10">
                                    <User className="h-6 w-6 text-purple-400"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">AI</h4>
                                    <p className="text-gray-400">An AI Enthusiastic integrating AI into web apps</p>
                                </div>
                            </div>
                        </div>
                        <div className="glass-card p-6">
                            <div className="flex items-start gap-4">
                                <div className="p-3 rounded-full bg-purple-500/10">
                                    <Briefcase className="h-6 w-6 text-purple-400"/>
                                </div>
                                <div className="text-left">
                                    <h4 className="font-semibold text-lg">DSA</h4>
                                    <p className="text-gray-400">Passionate in Data Structures And Algorithms</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}