import { Mail, Linkedin, Github } from "lucide-react";

const projects = [
  {
    title: "Tableau: Boston Airbnb Dashboard",
    link: "https://github.com/Cennywise/Boston-Airbnb-Dashboard",
    hoverImage: "/project_images/Boston_Dashboard_Pic.png",
    animation: "animate-slide",
  },
  {
    title: "Power BI: Data Analyst Survey",
    link: "https://github.com/Cennywise/Data-Analysis-Survey-Dashboard",
    hoverImage: "/project_images/Power_BI_Dashboard.jpg",
    animation: "animate-slide",
  },
  {
    title: "SQL: Worldwide Layoffs",
    link: "https://github.com/Cennywise/MySQL-Exploratory-Data-Analysis",
    hoverImage: "/project_images/world_layoffs.jpg",
    animation: "animate-slide",
  },
  {
    title: "Python: Unemployment Rates and Reddit",
    link: "https://github.com/Cennywise/Reddit-Economy-Analysis",
    hoverImage: "/project_images/Employment_and_Sentiment.png",
    animation: "animate-slide",
  },
  {
    title: "Python: AI Spotify Model",
    link: "https://github.com/leelasriniv/ecs-171-project",
    hoverImage: "/project_images/Spotify_App.jpg",
    animation: "animate-slide",
  },
  {
    title: "Excel: Sales Data Cleaning",
    link: "https://github.com/Cennywise/Bike-Sales-Data-Cleaning",
    hoverImage: "/project_images/bike_store.jpg",
    animation: "animate-slide",
  },
  {
    title: "C++: AI Synonym Finder",
    link: "https://github.com/Cennywise/AI-Synonym-Finder",
    hoverImage: "/project_images/robot_library.jpg",
    animation: "animate-slide",
  },
  {
    title: "Unity/C#: Embers",
    link: "https://github.com/Cennywise/Embers-3D-Survival-Game",
    hoverImage: "/project_images/Embers.png",
    animation: "animate-slide",
  },
  {
    title: "React + Tailwind: This Website",
    link: "https://cennywise.github.io/InocencioRangel.github.io/",
    hoverImage: "/project_images/website.png",
    animation: "animate-slide",
  },
];

export default function App() {
  return (
    <div className="relative min-h-screen text-white">
      {/* Landing / Portfolio Section */}
      <section className="min-h-screen text-white flex flex-col items-center justify-center">
        {/* Content */}
        <div className="flex flex-col items-center justify-between min-h-screen py-10">
          {/* Top: Your Name */}
          <h1 className="text-4xl font-dunerise mb-8">Inocencio Rangel</h1>

        {/* Circles Grid */}
        <div className="grid grid-cols-3 gap-8 my-16">
          {projects.map((project, i) => (
            <div key={i} className="flex flex-col items-center space-y-2">
              {/* Title */}
              <p className="text-white text-center text-xl font-bold">
                {project.title}
              </p>
              
              {/* Circle */}
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[150px] h-[150px] rounded-full relative overflow-hidden group
                shadow-[10px_10px_20px_rgba(0,0,0,0.9),-10px_-10px_20px_rgba(255,255,255,0.5)]
                transition-all duration-300 transform
                group-hover:scale-95 group-hover:shadow-[inset_15px_15px_25px_rgba(0,0,0,0.9),inset_-15px_-15px_25px_rgba(255,255,255,0.5)]"
              >
              
                {/* Pattern background */}
                <div
                  className={`absolute inset-0 bg-repeat bg-[length:200%] ${project.animation} transition-opacity duration-500 group-hover:opacity-30`}
                  style={{ backgroundImage: `url(${project.hoverImage})` }}
                ></div>

                {/* Hover image */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.hoverImage})` }}
                ></div>
                
                {/* Inner shadow (gives edge depth) */}
                <div className="absolute inset-0 rounded-full 
                  shadow-inner shadow-black/50 pointer-events-none"></div>

                {/* Subtle highlight rim */}
                <div className="absolute inset-0 rounded-full
                  bg-gradient-to-t from-white/10 to-transparent 
                  pointer-events-none"></div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-black bg-opacity-0 
                  group-hover:bg-opacity-0 transition"></div>

                <div className="absolute inset-0 rounded-full border border-white/20 group-hover:border-white/40 transition"></div>
              </a>
            </div>
          ))}
        </div>

          {/* Bottom: Project Portfolio */}
          <h2 className="text-4xl font-dunerise mb-8">Project Portfolio</h2>
        </div>
      </section>



      <section className="w-full min-h-screen flex flex-col">
        {/* Who Am I */}
        <div className="flex-1 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            {/* Center Title */}
            <h2 className="text-3xl font-dunerise text-center mb-8">Who Am I?</h2>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Picture */}
              <div className="flex-shrink-0 w-[500px] h-[500px] rounded-full overflow-hidden shadow-lg">
                <img
                  src="/selfie/tree_lean.jpg"
                  alt="Cenny Rangel"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Self-summary text */}
              <div className="flex-1 text-left text-xl">
                <p className="mb-4">
                  &emsp; How would you like a lighter workload?
                  I have a proven track record of being able to cover multiple jobs and a habit of going far above the call of duty.
                </p>
                <p className="mb-4">
                  &emsp; After graduating from UC Davis, I worked for two years at Lewis Brisbois Bisgaard & Smith.
                  There I pulled all-nighters, covered 3 jobs at once, and was relied on be nearly every person in the office.
                  When they became severely understaffed, I went above and beyond to keep day-to-day operations running smoothly.
                  My coworkers were heartbroken to see me go, but now I'm taking my talents and work ethic into the field of data analysis.
                </p>
                <p className="mb-4">
                  &emsp; I know a lot, and I can learn anything.
                  I graduated with a 3.5 GPA with a Batchelor's in mathematics and a minor in computer science.
                  I know 3 programming languages, and I've taught myself all the most important skills for data analysis, including Python, SQL, Excel, Tableau, and Power BI.
                  Above, I showcase my capabilities building dashboards, web scraping, cleaning and exploring data.
                  I do everything and more.
                </p>
                <p>
                  &emsp; I'm eager to join your team and start making your workplace the best it's ever been.
                  Let's get in touch!
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Me block */}
        <div className="w-full bg-gray-900/90 text-white py-12 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <div className="flex justify-center space-x-6">
              <a
                href="https://www.linkedin.com/in/inocencio-rangel-640364237/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
              >
                <Linkedin size={40} />
              </a>
            <a
              href="https://github.com/Cennywise"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={40} />
            </a>
            <a
              href="mailto:cennyrangel@gmail.com"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={40} />
            </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}