'use client';
import { useThemeContext } from "@/contexts/ThemeContext";
import Image from "next/image";

const ThemedImage = ({className, image, darkImage} : {className: string, image: string, darkImage?: string}) => {

  const {theme} = useThemeContext();
  const imageSrc = darkImage ? (theme === 'dark' ? darkImage : image) : image;
  return (
    <>
      {theme && <Image src={'/my-website'+imageSrc} alt="project" className={className} width={400} height={400}/>}
      {!theme && <Image src='/my-website/image_placeholder.png' alt="project" className={className} width={400} height={400}/>}
    </>
  )
}

export default ThemedImage;