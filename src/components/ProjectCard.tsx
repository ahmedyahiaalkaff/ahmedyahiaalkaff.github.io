import TagList from "./TagList";
import Link from "next/link";
import { GithubIcon, Icon, LinkIcon } from "./Icons";
import ThemedImage from "./ThemedImage";

export interface ProjectProps {
  name: string,
  role: string,
  description: string,
  image: string,
  tags: string[],
  link?: string,
  github?: string,
  darkImage?: string,
}

const ProjectCard = (
  {project}
  :
  {project: ProjectProps}
  ) => {
  return (
    <div className='max-w-sm flex flex-col rounded-md bg-primary dark:bg-lightPrimary h-[640px] shadow-xl shadow-gray-700 dark:shadow-slate-950'>
      {/* <img src={project.image} alt="project" className='rounded-t-md h-[280px] object-cover object-left-top border-2 border-black  border-b-0 dark:border-none'/> */}
      <ThemedImage image={project.image} darkImage={project.darkImage} className='rounded-t-md h-[280px] object-cover object-left-top border-2 border-black  border-b-0 dark:border-none' />
      <div className='pr-3 pl-3 pt-3 flex flex-col gap-y-3 grow'>
        <TagList tags={project.tags}/>
        <div className='flex flex-col justify-start gap-y-5 dark:text-black text-white grow'>
          <h1 className='text-3xl'>{project.name}</h1>
          <h2 className='text-2xl'>{project.role}</h2>
          <p className="grow">{project.description}</p>
          <div className="flex justify-start items-center">
            {project.link && (
              <Link href={project.link} target='_blank'><Icon width={'2rem'} height={'2rem'} IconComponent={LinkIcon}/></Link>
            )}
              {project.github && (
              <Link href={project.github} target='_blank'><Icon width={'2rem'} height={'2rem'} IconComponent={GithubIcon}/></Link>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default ProjectCard;