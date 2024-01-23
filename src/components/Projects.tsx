import ProjectCard, {ProjectProps} from "./ProjectCard";



const Projects = (
  {projects}
  :
  {projects: ProjectProps[]}
  ) => {
  return (
    <div className='flex flex-row flex-wrap items-center justify-evenly gap-4'>
      {projects.map(p => <ProjectCard project={p} key={p.name}/>)}
    </div>
  )
}

export default Projects;