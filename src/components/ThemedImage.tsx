'use client';
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const ThemedImage = ({className, image, darkImage} : {className: string, image: string, darkImage?: string}) => {

  const {theme} = useThemeContext();
  const imageSrc = darkImage ? (theme === 'dark' ? darkImage : image) : image;
  return (
    <>
      {darkImage ? 
        (theme ? 
          <Image src={imageSrc} alt="project" className={className} width={400} height={400}/>
        :
          <Image src='/image_placeholder.png' alt="project" className={className} width={400} height={400}/>
        ):
          <Image src={image} alt="project" className={className} width={400} height={400}/> 
        }
    </>
  )
}

export default ThemedImage;