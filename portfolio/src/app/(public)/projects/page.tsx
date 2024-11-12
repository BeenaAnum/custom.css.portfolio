
const projects = [
  { id: 1, name: "Static Resume", link: "https://static-resume-olive.vercel.app/", image: "download(1).png" , alt:"Milestone 1" },
  { id: 2, name: "Dynamic Resume", link: "https://dynamic-resume-self.vercel.app/", image: "download(2).png", alt:"Milestone 2"},
  { id: 3, name: "Editable Resume", link: "https://4th-milestone-editable-resume.vercel.app/", image: "download(3).png",alt:"Milestone 3"},
  { id: 4, name: "Shareable Resume", link: "https://5th-milestone-shareable-resume-five.vercel.app/", image: "download(4).png",alt:"Milestone 4" },
  { id: 5, name: "Dynamic-Country-App", link: "https://dynamic-country-routes-app.vercel.app/", image: "dynamic-country-app.png",alt:"Milestone 5" },
  { id: 6, name: "Dynamic-Country-Routes", link: "https://dynamic-country-routes.vercel.app/", image:"dynamic-country-route.png", alt:"Milestone 6" },
  { id: 7, name: "My Portfolio", link: "https://my-portfoilo-chi.vercel.app/", image: "portfolio.png", alt:"Milestone 7" },
  { id: 8, name: "SimpleNested-routing-app", link: "https://simple-routing-app-two.vercel.app/", image: "nested-routing.png",alt:"Milestone 8" },
];

export default function Projects() {
  return (
    <section className="projects">
       <h2>My Projects</h2>  
      {projects.map((project) => (
        <div key={project.id} className="project">
          <h3>{project.name}</h3>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <img src={project.image} alt={project.name} />
          </a>
          <h3>{project.alt}</h3>
        </div>
      ))}
    </section>
  );
}

