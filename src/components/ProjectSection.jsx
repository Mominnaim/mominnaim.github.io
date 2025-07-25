import { ExternalLink, Github, ArrowRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "CougBay",
        description: "A Marketplace where University of Houston students can buy and sell products and services.",
        image: "/projects/Cougbay.png",
        tags: ["React", "TailwindCSS", "Supabase"],
        demoUrl: "#",
        githubUrl: "https://github.com/alakram01/UH_Market_Place",

    },
    {
    id: 2,
    title: "Forms Request Service",
    description: "A web app that digitizes UH form requests—like withdrawals, VA benefits, and special petitions—making submission and tracking easier for students.",
    image: "/projects/FormsReqService.png",
    tags: ["Django", "SQLite3", "HTML/CSS"],
    demoUrl: "#",
    githubUrl: "https://github.com/alijavaidistar/WhiteRock"
    },
    {
    id: 3,
    title: "Ismaili Professional Network",
    description: "A professional networking platform where I built scalable, responsive front-end interfaces using AngularJS and Tailwind CSS.",
    image: "/projects/IpnOnline.png",
    tags: ["AngularJS", "TypeScript", "TailwindCSS"],
    demoUrl: "https://ipnonline.net/",
    githubUrl: "https://ipnonline.net/"
}
]

export const ProjectSection =() => {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center"> Featured <span className="text-primary"> Projects </span>
                </h2>
                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    Here are some of my crafty projects that I built with a team of Computer Science nerds.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, key) => (
                        <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
                            <div className="h-48 overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium rounded-full bg-secondary text-secondary-foreground">{tag}
                                        </span>
                                    ))}
                                </div>
                            
                            <h3 className="text-xl font-semibold mb-1">
                                {project.title}
                            </h3>
                            <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                            <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.demoUrl} className="text-foreground/80 hover:text-primary transition-colors duration-300"> <ExternalLink size={20}/> </a>
                                    <a href={project.githubUrl} target="_blank" className="text-foreground/80 hover:text-primary transition-colors duration-300"> <Github size={20}/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className= "text-center mt-12">
                    <a 
                    className="cosmic-button w-fit flex items-center mx-auto gap-2" 
                    href="https://github.com/Mominnaim"
                    target="_blank">Check My Github <ArrowRight size={16}/>
                    </a>
                </div>
            </div>
        </section>
    );
}