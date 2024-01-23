
import ContactForm from '@/components/ContactForm'
import FullScreenSection from '@/components/FullScreenSection'
import Projects from '@/components/Projects'
import ContactButton from '@/components/ContactButton'
import Image from 'next/image'

const Heading = ({text}:{text:string}) => {
  return (
    <h1 className='text-5xl mb-10 z-0'>
      <span className='pb-1 relative before:content-[""] before:w-full before:h-full before:absolute before:border-b-2 before:border-b-red-400
                      before:scale-x-50 before:top-0 before:left-0'>
        {text}
      </span>
    </h1>
  )
}

const projects = [
  {
    name: "GIS portal website",
    role: "Full Stack Developer",
    description: 'A web App to show maps and model different geospatial data. Database built on PPDM Data Model in Oracle, Backend services built with Java Spring and Hibernate. Frontend built with React, Redux, and OpenLayers library',
    image: '/gis_web_portal.PNG',
    tags: ['Java', 'Spring', 'Hibernate', 'React', 'Redux', 'OpenLayers']
  },
  {
    name: "YemenShortlist website",
    role: "Full Stack Developer",
    description: 'A Job Portal website for Job Advertisers and Applicants. Built with PHP (Slim lib and Smarty templates) with MySQL in ht backend. JQuery for interactivity and Bootstrap for UI components',
    image: '/yemenshortlist_tablet_screenshot.png',
    tags: ['PHP', 'MySQL', 'JQuery', 'Javascript', 'BootStrap'],
    link: 'https://yemenshortlist.com'
  },
  {
    name: "YemenShortlist App",
    role: "Full Stack Developer",
    description: 'Android App for YemenShortlist Website. Built with React Native and Redux',
    image: '/yemenshortlist_app.jpg',
    tags: ['React Native', 'Android', 'Redux', 'Firebase'],
    link: 'https://play.google.com/store/apps/details?id=com.yemenshortlist',
  },
  {
    name: "Portfolio Website",
    role: "Full Stack Developer",
    description: 'A website to showcase my projects. Built in Next.js',
    image: '/portfolio_light.png',
    tags: ['Next.js', 'React', 'Tailwindcss'],
    github: 'https://github.com/ahmedyahiaalkaff/my-website',
    darkImage: '/portfolio_dark.png'
  },
]


export default function Home() {
  return (
    <>
      <FullScreenSection id="home" className=' bg-gray-400 dark:bg-gray-700 flex flex-col md:flex-row justify-center items-center h-full pt-2 pb-2 scroll-mt-28'>
        <Image src="/my-website/myPhoto2.JPG"
          alt="my photo"
          className='object-cover rounded-full h-72 w-72
                     mb-4 md:mr-4 border-2 border-black
                    dark:border-0'
          width={72}
          height={72}
        />
        <div className='flex flex-col gap-y-3 items-start'>
          <h1 className='text-5xl'>Ahmed Alkaf</h1>
          <p>
            Full Stack Developer
          </p>
          <ContactButton />
        </div>
      </FullScreenSection>
      <FullScreenSection id="about" className='p-5 scroll-mt-28'>
        <Heading text={'About Me'} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam molestiae sequi, iusto excepturi mollitia temporibus quod, dolor soluta dolorum, possimus aspernatur commodi delectus maxime id consequatur tempore exercitationem rerum corrupti?
        </p>

      </FullScreenSection>
      <FullScreenSection id="projects" className='bg-gray-400 dark:bg-gray-700 p-5 scroll-mt-28'>
        <Heading text={'Projects'} />
        <div>
          <Projects projects={projects} />
        </div>
      </FullScreenSection>
      <FullScreenSection id="contact" className='p-5 scroll-mt-28'>
        <Heading text={'Contact Me'} />
        <ContactForm />

      </FullScreenSection>
    </>
  )
}
